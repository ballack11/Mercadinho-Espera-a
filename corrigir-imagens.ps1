$ErrorActionPreference = "Stop"

$baseDir = (Get-Location).Path
$indexPath = Join-Path $baseDir "index.html"
if (!(Test-Path $indexPath)) {
  Write-Host "ERRO: index.html não encontrado nesta pasta." -ForegroundColor Red
  exit 1
}

$imagesDir = Join-Path $baseDir "assets\images"
if (!(Test-Path $imagesDir)) {
  Write-Host "ERRO: Pasta assets\images não existe." -ForegroundColor Red
  exit 1
}

$html = Get-Content -Raw -Encoding UTF8 $indexPath

# pega { sku: "1001", nome: "Arroz Tipo 1kg", categoria: "Mercearia" }
$pattern = '\{\s*sku:\s*"(?<sku>[^"]+)"\s*,\s*nome:\s*"(?<nome>[^"]+)"\s*,\s*categoria:\s*"(?<cat>[^"]+)"\s*\}'
$matches = [regex]::Matches($html, $pattern)

if ($matches.Count -eq 0) {
  Write-Host "ERRO: Não encontrei a lista PRODUTOS dentro do index.html" -ForegroundColor Red
  exit 1
}

function Slugify([string]$s) {
  $s = $s.ToLowerInvariant()

  # remove acentos
  $normalized = $s.Normalize([Text.NormalizationForm]::FormD)
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $normalized.ToCharArray()) {
    $uc = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($ch)
    if ($uc -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$sb.Append($ch)
    }
  }
  $s = $sb.ToString().Normalize([Text.NormalizationForm]::FormC)

  $s = ($s -replace '[^a-z0-9]+', '-')
  $s = ($s -replace '(^-|-$)', '')
  return $s
}

$renamed = 0
$alreadyOk = 0
$missing = 0

foreach ($m in $matches) {
  $sku = $m.Groups["sku"].Value.Trim()
  $nome = $m.Groups["nome"].Value.Trim()
  $expectedName = "${sku}_$(Slugify $nome).jpg"
  $expectedPath = Join-Path $imagesDir $expectedName

  if (Test-Path $expectedPath) {
    $alreadyOk++
    continue
  }

  # procura qualquer arquivo começando com "SKU_" dentro de assets\images
  $candidate = Get-ChildItem -Path $imagesDir -File | Where-Object { $_.Name -like "${sku}_*.jpg" } | Select-Object -First 1

  if ($null -ne $candidate) {
    Rename-Item -Path $candidate.FullName -NewName $expectedName
    $renamed++
  } else {
    $missing++
  }
}

Write-Host ""
Write-Host "✅ Finalizado!" -ForegroundColor Green
Write-Host "✔ Já estavam corretos: $alreadyOk"
Write-Host "🔁 Renomeados: $renamed"
Write-Host "⚠ Não achei arquivo para alguns SKUs: $missing"
Write-Host ""
Write-Host "Agora abra o index.html de novo e confira as imagens no catálogo." -ForegroundColor Yellow
