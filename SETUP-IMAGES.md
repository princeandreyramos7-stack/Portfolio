# Image Setup Instructions

## Option 1: Run the Batch Script (Easiest)

Simply double-click `copy-images.bat` in the project root. This will automatically copy all images from your Desktop Portfolio folder to the correct locations.

## Option 2: Manual Copy

Copy your images manually to these locations:

### Project Images
Copy from: `C:\Users\Acer\OneDrive\Desktop\Portfolio\src\project_pictures\`
Copy to: `public\project_pictures\`

Files needed:
- courseware.png
- cpdo.png
- pims.png
- ISAT e-TRACES.jpg

### Certificate Images
Copy from: `C:\Users\Acer\OneDrive\Desktop\Portfolio\src\certificates\`
Copy to: `public\certificates\`

Files needed:
- device-configuration.jpg
- databases.jpg
- roadshow.jpg
- tron.jpg

## Option 3: Using Command Line

Open Command Prompt in the project folder and run:

```bash
copy-images.bat
```

## Verify Images

After copying, your folder structure should look like:

```
public/
├── project_pictures/
│   ├── courseware.png
│   ├── cpdo.png
│   ├── pims.png
│   └── ISAT e-TRACES.jpg
└── certificates/
    ├── device-configuration.jpg
    ├── databases.jpg
    ├── roadshow.jpg
    └── tron.jpg
```

## Troubleshooting

If images still don't show:
1. Make sure the file names match exactly (including spaces and capitalization)
2. Restart the development server: `npm start`
3. Clear browser cache (Ctrl + Shift + R)
4. Check browser console for any errors (F12)

## Fallback

If images are missing, the portfolio will show:
- Project cards: First letter of project name on colored background
- Certificates: Colored gradient background with award icon
