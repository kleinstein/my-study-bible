# MyStudyBible App Introduction

For a long time, I have been using MySword Bible on Android and theWord Bible app for Windows.
Then, for personal reasons, my computer environment changed to Mac and iPhone, but I couldn't find a Bible app on iPhone that was as good as what I used on Android.
So I used the latest AI to the fullest and ended up creating this Bible app for iPhone/iPad.

Eventually, I made it support English as well so that as many people as possible could use it, and it has even reached the point of being distributed for free through the App Store worldwide.
Perhaps English-speaking users may hesitate to use it due to the language barrier because the introduction section of the App Store is in Korean, but I think that over time, if users recognize it as a good app, it will spread through word of mouth.

And most of the data used in this app must be obtained directly by users, and there is also the inconvenience of having to copy those data files directly into various folders under the MyStudyBible folder created after installing the app. However, to avoid licensing issues, I had no choice but to make this decision.

For your reference, if you go to the Naver Cafe below, you will be able to obtain more data.
Naver Cafe: https://cafe.naver.com/thewordkor

I will briefly write here what files should be placed in various folders under the MyStudyBible folder.

- **bible**: Put Sqlite format Bible (e.g. *.bbl.mybible) files here.
- **commentary**: Put Sqlite format commentary (e.g. *.cmt.mybible) files here.
- **cross_ref**: Put Sqlite format cross-reference (e.g. *.xrefs.twm) files here. (You can use default.xrefs.twm used in theWord, a PC app, or use files available from the Naver Cafe introduced above.)
- **font**: Get .ttf or .otf font files you want to use and put them here.
- **Images**: If you allow photo access permission within the app, selected photos for that verse are automatically copied and saved here. For reference, if the image filename starts with the format 'BookName-ChapterNumber-VerseNumber_xxxxx', the app will automatically load it.
- **mapdata**: Put Sqlite format map data files here. You can get them from the Naver Cafe introduced earlier.
- **user_data**: User data created within the app, such as user notes, highlights, underlines, bookmarks, and imported reading plans, are saved here in sqlite format. (This is not a folder where you put files you obtained directly)
- **dict (Created from MyStudyBible version 2.5)**: Put MySword Strong's dictionary database files here.

## Version History

### Key Features Added in 2.8.0
- The search window is now larger on iPad.
- You can select multiple Bible versions to search through in the search settings, and the search results will show verse content from all selected versions.
<img src="MyStudyBible_2_4_Images/search_result_selected_bible.PNG" style="height: 600px; width: auto;">
<img src="MyStudyBible_2_4_Images/search_option.PNG" style="height: 600px; width: auto;">
<br>

- Strong's code number search has been added. You can search with H123 or G123 (H for Hebrew, G for Greek), or just search with numbers only to search both Hebrew and Greek. Note that the Strong's dictionary file must be in the dict folder, and a Bible version file containing Strong's codes must be in the bible folder for this to work properly.
<img src="MyStudyBible_2_4_Images/search_result_strong_nr.PNG" style="height: 600px; width: auto;">
<img src="MyStudyBible_2_4_Images/search_result_strong_dict.PNG" style="height: 600px; width: auto;">
<br>

- In the note input window, when you enter a book name and chapter:verse inside square brackets, the verse is automatically copied to the clipboard. Previously, a space was required between the book name and chapter:verse, but now it works without the space as well.

### Key Features Added in 2.7.3
- You can now adjust the footnote superscript size directly in the settings.
- RF and Rf tags surrounding note sections in the Bible text were previously not processed. Now they are displayed as superscripts, and tapping the superscript opens a new window showing the note content.

### Key Features Added in 2.7.1
- A Bible reading feature powered by an ultra-lightweight AI-based TTS engine  
- A timer function during voice narration  
- Support for audio playback in the background (even when the screen is off)  

### Key Features Added in 2.6.3
- Resize the annotation window on the iPad to occupy 95% of the full screen.  
- Correcting errors within the Reading Plan CSV files.  

### Key Features Added in 2.6.2
- Resolved an issue where the Reading Plan CSV files that should have been copied during app installation were not being copied.  

### Key Features Added in 2.6.1
- Fixed issue where image ratio was not preserved when images were added.
- Fixed issue where images were saved locally even when iCloud sync was enabled.

### Key Features Added in 2.6
- In comparison view, you can compare up to 4 versions side by side.
- Fixed various issues that occurred in the underline feature.
<img src="MyStudyBible_2_4_Images/compare_view_4_column.jpg" style="max-height: 704px; height: auto; width: auto; max-width: 100%;">
<br>

### Key Features Added in 2.5.5
- You can adjust the font size of commentary content in the commentary window from the settings window.
- The font size of commentary window content and the font size in the popup window that appears when you tap a reference verse link text are now set to be the same.
- The color of reference verse link text in the commentary window is now set to match the link text color setting value in the settings window.
- When you select Bible reference verse text (e.g. Gen 3:1-3) in any app -> Share -> BibleVerseAction, the verse is saved to the clipboard.
- Automatically recognizes Bible reference verse text in subtitles and displays it as linkable text. You can tap the link to view the verse in a popup window.

### Key Features Added in 2.5.1
Version 2.5.1 is mostly bug fixes with the following additional features:

- Activated Strong's code links in Original Text Analysis Bibles (Strong's code dictionary popup)
- Font size setting in Strong's code dictionary popup window
- Made the Strong's code link text in Original Text Analysis Bibles and the link text color in Strong's code dictionary popup window the same as the link text color setting value in the settings window.

### Key Features Added in 2.5

##### Support for some Bibles with Strong's numbers linked to Strong's dictionary.
- Users must save MySword Strong's dictionary files under the newly created MyStudyBible->dict folder.
- I have confirmed that it works with the KJV with Strong Number Bible that I have.
- When you tap a Strong's number, it references the MySword Strong's dictionary file under the MyStudyBible->dict folder and displays its meaning and content in a popup window.
- The color of the text displaying Strong's numbers can be modified in the link text color in the settings window.
- Known issue: In Bibles with Strong's numbers, underlining may not display Strong's numbers properly.

<div style="display: flex; gap: 10px; overflow-x: auto; padding: 20px; background-color: #ffffffff; border-radius: 10px;">
  <img src="MyStudyBible_2_4_Images/strong-view.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/strong-dict.png" style="height: 600px; width: auto;">
</div>

##### Support for some Original Text Analysis Bibles.
- The few Original Text Analysis Bibles I have worked well. If you have a Bible that has problems, please send it to me so I can test it.
- Known issue: In Original Text Analysis Bibles, most of the menu functions may not work properly. Please use it only as a viewer.

<div style="display: flex; gap: 10px; overflow-x: auto; padding: 20px; background-color: #ffffffff; border-radius: 10px;">
  <img src="MyStudyBible_2_4_Images/heb-greek-view1.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/heb-greek-view2.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/heb-greek-view3.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/heb-greek-view4.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/heb-greek-view5.png" style="height: 600px; width: auto;">
</div>

##### You can enter and manage person relationships.
- When you open the menu with a double tap, the 'Edit Person Relationship' menu is displayed.
- A person icon is displayed after verses where person relationships are saved, and when you tap the person icon, the person relationship window is displayed.
- Person relationships must be filled in directly by the user. It is not easy to work on the small screen of an iPhone, so we plan to distribute a Person Relationship Editor for Mac and Windows through this website.

<div style="display: flex; gap: 10px; overflow-x: auto; padding: 20px; background-color: #ffffffff; border-radius: 10px;">
  <img src="MyStudyBible_2_4_Images/person_relation1.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/person_relation2.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/person_relation3.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/person_relation4.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/person_relation5.png" style="height: 600px; width: auto;">
</div>

##### We plan to distribute a Person Relationship Editor for Mac and Windows.
- When it is difficult to edit complex person relationships on the small iPhone screen, I created a Person Relationship Editor that can be run on Mac and Windows using Python and the pyQT6 library. AI helped a lot. ;-)

- [View Person Relationship Editor Manual](https://kleinstein.github.io/my-study-bible/#/en/PersonRelationshipEditor-mac)

##### iCloud Drive support.
- You can turn iCloud sync on or off in the settings window.
- When iCloud sync is off, all changes that occur while using the app are saved and updated under the 'On My iPhone' -> MyStudyBible folder.
- When iCloud sync is on, all changes that occur while using the app are saved and updated under the 'iCloud'->MyStudyBible folder.
- When iCloud sync is on, it is possible to continue working with the same data on iPhone and iPad. This is because both iPhone and iPad use and update the same data on iCloud.
Of course, synchronization speed may be slow depending on the region, so you may have to wait about 10 minutes.

* When a conflict occurs between local data and iCloud data while trying to turn on iCloud sync:

  - Select "Use iCloud Data":
    - Uses the data that was on iCloud as is (no copying)
    - Local data remains as is
    - The app will use iCloud data
  - Select "Use Local Data":
    - Copies local data to iCloud
    - Overwrites existing data on iCloud
    - The app will use iCloud data

* When a conflict occurs between local data and iCloud data while trying to turn off iCloud sync:

  - Select "Use iCloud Data":
    - Copies iCloud data locally
    - Overwrites existing local data
    - The app will use local data
  - Select "Use Local Data":
    - Uses the data that was local as is (no copying)
    - iCloud data remains as is
    - The app will use local data

<img src="MyStudyBible_2_4_Images/icloud-sync.png" style="height: 600px; width: auto;">

### Fixes in 2.3.1

- Fixed an issue where text appeared in Korean in Normal View, Comparison View, and Contrast View modes when the language setting was English.
- Fixed an issue where changes made to underlines in Normal View Mode were not immediately reflected.

### Features Added in 2.3:

- Added 3 viewing modes. In comparison view and contrast view, the three icons (note, bookmark, cross-reference icon) always appear after the verse only in the reference Bible.
- In side-by-side contrast view, verse copying, verse range copying, and underlining apply to the version you double-tap. The remaining functions operate based on the default Bible on the left.
- In side-by-side contrast view, the note icon, bookmark icon, cross-reference icon, and map icon all appear only on the default Bible on the left.

##### Normal View
Only one Bible version is displayed on the screen.
##### Comparison View
For each verse, the contents of two or more Bible versions selected in the settings are displayed on the screen one verse at a time from top to bottom.
##### Contrast View
Two Bible versions selected in the settings are displayed side by side on the left and right of the screen.

