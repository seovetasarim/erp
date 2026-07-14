Add-Type -AssemblyName System.Drawing
# Restore from original if we corrupted - use current file and paint larger white over Graph area
$path = "C:\Users\A\Desktop\sds\agntix-nextjs\public\assets\img\home-11\hero\hero-shape-3.png"
# Prefer pristine: if backup exists use it. Else use current.
$src = [System.Drawing.Image]::FromFile($path)
Write-Host ("size " + $src.Width + "x" + $src.Height)

$bmp = New-Object System.Drawing.Bitmap $src.Width, $src.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.DrawImage($src, 0, 0)

# Heuristic: white card is large; Graph is top-left inside card. Paint wider cover.
# Sample: find whitish region and cover top-left text band
$cover = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
# Tuned for typical card placement in this asset
$g.FillRectangle($cover, 95, 118, 130, 36)

$font = New-Object System.Drawing.Font "Segoe UI Semibold", 18, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 35, 38, 48))
$g.DrawString("Grafik", $font, $brush, 100, 124)

$out = "C:\Users\A\Desktop\sds\agntix-nextjs\public\assets\img\home-11\hero\hero-grafik.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose(); $src.Dispose(); $cover.Dispose(); $font.Dispose(); $brush.Dispose()
Write-Host "wrote $out"
