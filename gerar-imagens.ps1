$ErrorActionPreference = "Stop"

# Usa a pasta atual
$baseDir = (Get-Location).Path

$indexPath = Join-Path $baseDir "index.html"
if (!(Test-Path $indexPath)) {
  Write-Host "ERRO: Não achei o index.html nesta pasta." -ForegroundColor Red
  exit 1
}

$imagesDir = Join-Path $baseDir "assets\images"
$missingDir = Join-Path $imagesDir "missing"
New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null
New-Item -ItemType Directory -Force -Path $missingDir | Out-Null

$html = Get-Content -Raw -Encoding UTF8 $indexPath

$pattern = '\{\s*sku:\s*"([^"]+)"\s*,\s*nome:\s*"([^"]+)"\s*,\s*categoria:\s*"([^"]+)"\s*\}'
$matches = [regex]::Matches($html, $pattern)

if ($matches.Count -eq 0) {
  Write-Host "ERRO: Nenhum produto encontrado no index.html." -ForegroundColor Red
  exit 1
}

function Slugify($s) {
  $s = $s.ToLower()
  $s = [Text.NormalizationForm]::FormD -as [string]
  $s = ($s -replace '[^a-z0-9]+', '-')
  return $s.Trim('-')
}

$listPath = Join-Path $baseDir "lista-imagens.txt"
"" | Out-File -Encoding UTF8 $listPath

$pngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO8p1X0AAAAASUVORK5CYII="
$pngBytes = [Convert]::FromBase64String($pngBase64)

$files = @()

foreach ($m in $matches) {
  $sku = $m.Groups[1].Value
  $nome = $m.Groups[2].Value
  $slug = ($nome.ToLower() -replace '[^a-z0-9]+','-').Trim('-')
  $files += "$sku`_$slug.jpg"
}

$files = $files | Sort-Object -Unique

foreach ($f in $files) {
  Add-Content -Path $listPath -Value $f
  $dest = Join-Path $imagesDir $f
  if (!(Test-Path $dest)) {
    [IO.File]::WriteAllBytes((Join-Path $missingDir $f), $pngBytes)
  }
}

Write-Host "✅ Concluído com sucesso!" -ForegroundColor Green
Write-Host "📁 assets\images criada"
Write-Host "📁 assets\images\missing criada"
Write-Host "📄 lista-imagens.txt gerada"
