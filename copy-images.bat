@echo off
echo Copying project images...

REM Create directories if they don't exist
if not exist "public\project_pictures" mkdir "public\project_pictures"
if not exist "public\certificates" mkdir "public\certificates"

REM Copy project images
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\project_pictures\courseware.png" "public\project_pictures\" 2>nul
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\project_pictures\cpdo.png" "public\project_pictures\" 2>nul
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\project_pictures\pims.png" "public\project_pictures\" 2>nul
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\project_pictures\ISAT e-TRACES.jpg" "public\project_pictures\" 2>nul

REM Copy certificate images
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\certificates\device-configuration.jpg" "public\certificates\" 2>nul
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\certificates\databases.jpg" "public\certificates\" 2>nul
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\certificates\roadshow.jpg" "public\certificates\" 2>nul
copy "C:\Users\Acer\OneDrive\Desktop\Portfolio\src\certificates\tron.jpg" "public\certificates\" 2>nul

echo Done! Images copied successfully.
pause
