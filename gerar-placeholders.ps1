$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$base = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $base

$indexPath = Join-Path $base "index.html"
if(!(Test-Path $indexPath)){ throw "Não achei index.html na pasta do script." }

# garante pasta
$imgDir = Join-Path $base "assets\images"
New-Item -ItemType Directory -Force -Path $imgDir | Out-Null

# pega todos os SKUs do array PRODUTOS no index.html
$html = Get-Content -Raw -Encoding UTF8 $indexPath
$skus = [regex]::Matches($html, 'sku\s*:\s*"(?<sku>\d+)"') | ForEach-Object { $_.Groups["sku"].Value } | Sort-Object -Unique

function New-PlaceholderImage($outPath, $text) {
  $w = 900; $h = 600
  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = "HighQuality"
  $g.Clear([System.Drawing.Color]::FromArgb(243,251,246))

  $rect = New-Object System.Drawing.Rectangle(60, 60, ($w-120), ($h-120))
  $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)), $rect)
  $g.DrawRectangle((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(203,213,225), 4)), $rect)

  $font1 = New-Object System.Drawing.Font("Arial", 46, [System.Drawing.FontStyle]::Bold)
  $font2 = New-Object System.Drawing.Font("Arial", 22, [System.Drawing.FontStyle]::Regular)

  $green = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(14,163,90))
  $red = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(225,29,72))
  $gray = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100,116,139))

  $title = "Mercadinho Esperança"
  $sizeT = $g.MeasureString($title, $font2)
  $g.DrawString($title, $font2, $gray, ($w/2 - $sizeT.Width/2), 120)

  $size = $g.MeasureString($text, $font1)
  $g.DrawString($text, $font1, $green, ($w/2 - $size.Width/2), ($h/2 - $size.Height/2))

  $sub = "Troque pela foto real depois"
  $sizeS = $g.MeasureString($sub, $font2)
  $g.DrawString($sub, $font2, $red, ($w/2 - $sizeS.Width/2), 420)

  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}

$created = 0
foreach($sku in $skus){
  $path = Join-Path $imgDir "$sku.jpg"
  if(!(Test-Path $path)){
    New-PlaceholderImage $path "SKU $sku"
    $created++
  }
}

Write-Host "✅ SKUs encontrados: $($skus.Count)"
Write-Host "✅ Placeholders criados: $created"
Write-Host "Pasta: $imgDir"
