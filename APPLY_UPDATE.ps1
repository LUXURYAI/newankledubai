$ErrorActionPreference = "Stop"
$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$repo = "C:\Users\EMIL\Documents\GitHub\newankledubai"
if (-not (Test-Path "$repo\.git")) { throw "Git repository not found: $repo" }
robocopy $source $repo /MIR /XD ".git" "node_modules" ".next" "out" | Out-Host
Set-Location $repo
Write-Host "Files copied. Current Git changes:" -ForegroundColor Cyan
git status --short
