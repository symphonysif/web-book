# Get the directory path where the script is located
$directoryPath = $PSScriptRoot

# Get all .svg files in the specified directory
$svgFiles = Get-ChildItem -Path $directoryPath -Filter *.svg

$mp3Files = Get-ChildItem -Path $directoryPath -Filter *.mp3

# Loop through each .svg file and rename it by adding "(R)" at the beginning
foreach ($file in $svgFiles) {
    $newFileName = "(R) " + $file.Name
    $newFilePath = Join-Path -Path $directoryPath -ChildPath $newFileName
    Rename-Item -Path $file.FullName -NewName $newFilePath
    Write-Host "Renamed $($file.Name) to $($newFileName)"
}

foreach ($file in $mp3Files) {
    $newFileName = "(R) " + $file.Name
    $newFilePath = Join-Path -Path $directoryPath -ChildPath $newFileName
    Rename-Item -Path $file.FullName -NewName $newFilePath
    Write-Host "Renamed $($file.Name) to $($newFileName)"
}