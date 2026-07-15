$ErrorActionPreference = "Stop"
$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$repo = "C:\Users\EMIL\Documents\GitHub\newankledubai"
if (-not (Test-Path "$repo\.git")) { throw "Git repository not found: $repo" }
robocopy $source $repo /MIR /XD ".git" "node_modules" ".next" "out" | Out-Host
Write-Host "Update copied successfully." -ForegroundColor Green
Write-Host "Open GitHub Desktop, Commit the changed files, then click Push origin." -ForegroundColor Cyan
