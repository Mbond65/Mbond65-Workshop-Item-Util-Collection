[CmdletBinding()]
Param(
  [Parameter(Mandatory=$True,Position=1)]
   [string]$folderpath,
	
   [Parameter(Mandatory=$True)]
   [string]$oldstring,
   
   [Parameter(Mandatory=$True)]
   [string]$newstring
)

# Variables
$Exittext = "Press any key to exit"
$VMTPath = $folderpath + "*"

$FolderTest = Test-Path $VMTPath

if ($FolderTest -eq $false)
{
	Write-Host "Folder not found, please double check the path provided" -ForegroundColor Red
	Write-Host $Exittext -ForegroundColor Red
    Read-Host
    Exit
}

$Files = Get-Item $VMTPath


Try 
{
	foreach ($File in $Files) 
		{
		$File.PSParentPath

			if ($File.Extension -eq ".vmt")
			{
				$content = Get-Content $File       
				$content = $content.Replace($oldstring, $newstring)
				$path = $File.FullName
				set-content $path $content
			}
		}
}
Catch 
{
	$ErrorMessage = $_.Exception.Message
	Write-Host $ErrorMessage -ForegroundColor Red
	Write-Host $Exittext -ForegroundColor Red
    Read-Host
    Exit
}