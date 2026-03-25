# MyStudyBible App Introduction

For a long time, I have been using MySword Bible on Android and theWord Bible app for Windows.
Then, for personal reasons, my computer environment changed to Mac and iPhone, but I couldn't find a Bible app on iPhone that was as good as what I used on Android.
So I used the latest AI to the fullest and ended up creating this Bible app for iPhone, iPad, and Mac.

The **macOS Desktop version** is coming soon to the Mac App Store, bringing the full Bible study experience to a larger screen with keyboard and a native Mac interface.

Eventually, I made it support English as well so that as many people as possible could use it, and it has even reached the point of being distributed for free through the App Store worldwide.
Perhaps English-speaking users may hesitate to use it due to the language barrier because the introduction section of the App Store is in Korean, but I think that over time, if users recognize it as a good app, it will spread through word of mouth.

And most of the data used in this app must be obtained directly by users, and there is also the inconvenience of having to copy those data files directly into various folders under the MyStudyBible folder created after installing the app. However, to avoid licensing issues, I had no choice but to make this decision.

For your reference, if you go to the MySword Website, you will be able to obtain more data.

I will briefly write here what files should be placed in various folders under the MyStudyBible folder.

- **bible**: Put Sqlite format Bible (e.g. *.bbl.mybible) files here.
- **commentary**: Put Sqlite format commentary (e.g. *.cmt.mybible) files here.
- **cross_ref**: Put Sqlite format cross-reference (e.g. *.xrefs.twm) files here. (You can use default.xrefs.twm used in theWord, a PC app, or use files available from the Naver Cafe introduced above.)
- **font**: Get .ttf or .otf font files you want to use and put them here.
- **Images**: If you allow photo access permission within the app, selected photos for that verse are automatically copied and saved here. For reference, if the image filename starts with the format 'BookName-ChapterNumber-VerseNumber_xxxxx', the app will automatically load it.
- **mapdata**: Put Sqlite format map data files here. You can get them from the Naver Cafe introduced earlier.
- **user_data**: User data created within the app, such as user notes, highlights, underlines, bookmarks, and imported reading plans, are saved here in sqlite format. (This is not a folder where you put files you obtained directly)
- **dict**: Put MySword Strong's dictionary files (.dct.mybible) and general dictionary files here. Dictionary search is available from the search screen.
- **book**: Put .bok.mybible format book files here. Access them through the hamburger button in the lower right.
- **hymn**: Put .bok.mybible format hymnal scan files here. Access them through the hamburger button in the lower right.

## Version History

### Updates in 3.0.5
- Added RMAC (Robinson's Morphological Analysis Codes) dictionary support. When viewing interlinear Bibles, tapping a morphology code (e.g., V-AIA-3P, N-NFS, Conj) now opens a popup showing its grammatical meaning.
- The app automatically detects RMAC dictionaries from the `dict` folder by examining file content, so the dictionary filename does not need to be specific.
- Bible files with an embedded Dictionary table (e.g., BIB++) are checked first. If the morphology code is not found there, the external RMAC dictionary in the `dict` folder is used as a fallback.
- Fixed an issue where Greek original text and morphology codes were not displayed for certain interlinear Bible formats (e.g., BIB++ Berean Interlinear Bible).

### Updates in 3.0.4
- Added support for Q tag interlinear Bible.
- Improved dictionary search method. (Modified to let users select from a list of matching headwords.)
- Fixed an issue where the first character's consonant and vowel were separated when typing a relationship in the person relationship editor.
- Improved automatic recognition of various Bible references in commentary content.

### Updates in 3.0.3
- Added support for GRVi interlinear format.

### Fixes in 3.0.1
- Fixed an issue where Bible reference links were not recognized in comparison mode.
- Fixed an issue where SUP tags in uppercase were not recognized.
- Fixed to recognize B tags and other tags regardless of case sensitivity.

### Key Features Added in 3.0.0
- Hyperlinks on table of contents pages in the book viewer now work correctly.
- In the book viewer, Bible reference verses marked with `class=bible` are now automatically displayed inline on the page.
- Fixed an issue where B tags were displayed as raw text in subtitles.
- Bible references in the book viewer are now automatically detected and converted to clickable links.
- In the person selection window, you can now delete a person by swiping their name to the left.
- In the person selection window, when selecting a person, you can now choose to register them for the current verse only, or for all verses where the person's name appears.
- Fixed to support more Bible links in the Strong's dictionary.

### Key Features Added in 2.9.9
- Partial markdown syntax support in the note editor (bold, italic, underline, bullet list, blockquote, etc.).
- Fixed an issue where links in the TOC of some books were not working.
- Added automatic Bible verse display for referenced verses in some books.
- Bible version order can now be rearranged in the version selection window.
- Improved the method for rearranging comparison version order in Settings > Comparison Version Management.
- Fixed an issue where the view button at the bottom of the hymnal viewer was cut off.
- Improved the person relationship editing method. Users can now select and add appearing characters directly from the current verse.
- Footnote Bible references in the Bible text can now be viewed in a popup window.

### Fixes in 2.9.8
- Fixed an issue on iPad where the background scrolled down when dismissing the commentary window by swiping down.
- Added left/right padding in full-screen mode on iPad to prevent overlap with the multitasking button.
- Added the ability to search by title in the hymnal selection window.

### Fixes in 2.9.7
- Fixed an issue where the Bible version selection button was hidden behind the multitasking button.
- Fixed an issue where the background scrolled down when dismissing the bookmark category management and reading history windows by swiping.
- In the book viewer's table of contents, the previously selected item now auto-scrolls into view.

### Fixes in 2.9.6
- Fixed an issue where images were not displayed in .bok.mybible format book files that primarily contain images.
- Fixed an issue where images in dictionary search results were not displayed.
- Improved the dictionary search algorithm.
- Added the ability to adjust line spacing in Bible search results (fixes the issue of narrow line spacing when using custom fonts).
- Improved the hymnal number selection UI for faster selection.

### Fixes in 2.9.5
- Fixed a bug where the verse selection background color appeared as black.
- Fixed an issue in the book viewer where the page scrolled to the top after opening and closing a Bible reference popup.
- Fixed an issue where the verse selection background color did not work properly in comparison view.

### Key Features Added in 2.9.4
- Confirmed swipe-down-to-dismiss behavior for the bookmark category management and reading history windows on iPad.
- Fixed an issue on iPad where the highlight change window was cut off at the top and bottom.
- Fixed an issue where tapping the "Go to Verse" button navigated to the first verse of the chapter instead of the target verse.
- When navigating to a verse, the verse is now highlighted with a background color to indicate selection. Similarly, when a user taps a verse, it is also highlighted. The highlight color can be customized by the user.
- Line spacing adjustment is now available in the book viewer.
- Fixed an issue where blank entries appeared in the Highlights and Notes tabs within Reading History mode.
- Added a new "Exact Phrase Match" search method to the search options.

### Key Features Added in 2.9.3
- On iPad, the size of the note input window, bookmark management window, and history (reading history) window can now be adjusted by the user in settings.
- On iPad, when the note input window is open, it will no longer disappear when tapping outside the window, when Siri activates another app, or when switching apps and returning.
- Improved the description text related to categories when adding bookmarks to be clearer.
- A new "Notes" tab has been added to the Reading History window accessible from the hamburger button in the lower right.
- In the Highlights and Underlines tabs of the Reading History window, a "Go to Verse" button has been added to the upper left of the Bible reference popup window.
- In the Notes tab of the Reading History window, tapping a Bible reference text now navigates directly to that verse and opens the note editor.
- The book viewer now remembers the last reading position and automatically opens to that position when reopening the same book.
- When double-tapping on a verse with an existing highlight, a "Change Highlight" menu now appears. Tapping it opens a window where you can change the highlight color or remove the highlight.
- Fixed a bug where images were not deleted when tapping the delete button in the image viewer that appears after double-tapping a verse with an attached image.

### Key Features Added in 2.9.2
- Widget functionality has been newly implemented. Highlighted or underlined verses are displayed on the widget, rotating at user-defined time intervals.
- In the book viewer, the table of contents title at the top is now centered relative to the iPhone Dynamic Island.
- Bible hyperlinks in book content now work correctly in the book viewer (only when valid anchor tags exist in the content).
- Highlighted and noted verses can now be viewed in the Reading History window accessible from the hamburger button in the lower right.
- Highlight colors are no longer limited to a single color — you can now set different highlight colors for individual verses. The provided default colors can also be changed by long-pressing them.
- The reading plan icon in the upper right on iPhone has been changed to a calendar icon, matching the reading plan icon in the MyStudyBible Desktop app.
- In dictionary search results, BR tags are now properly applied according to their count.

### Key Features Added in 2.9.1
- Added a "Clear All Recent Searches" button in the search window.
- When unchecking a specific dictionary in the dictionary search settings, the unchecked state is now preserved after app restart.
- The close button is now positioned in the upper right when opening books and hymnals.
- Improved parsing of various Bible verse link formats in search result text.
- Dictionary and book order can now be rearranged.

### Key Features Added in 2.9.0
- You can now read .bok.mybible format book files by creating a folder named "book" and placing the files inside. Tap the hamburger button in the lower right to access them.
- You can now search dictionaries by placing .dct.mybible format dictionary files in the dict folder. Tap the magnifying glass button in the upper right of the screen to see the new dictionary search tab.
- Changed the hymnal viewer arrow color to gray.
- The user's selected hymnal number is no longer reset to 001.

### Key Features Added in 2.8.7
- When editing person relationship appearing characters, you can now add "exclusion words" to prevent partial name matches from registering unrelated verses. For example, if a person named "Ham" is created, verses containing the word "hammer" would also register "Ham" as an appearing character. By adding "hammer" as an exclusion word for "Ham", those verses will no longer register "Ham" as an appearing character.
- Added support for hymnal files (.bok.mybible) to view hymnal images. Create a folder named "hymn" and place the .bok.mybible files inside, then access them through the hamburger button in the lower right.

### Key Features Added in 2.8.5
- Fixed minor bugs in parts using the TTS engine.  
- Added a "Read Bible Passage Aloud" button for the corresponding passage in the reading plan.  

<img src="MyStudyBible_2_4_Images/reading_plan_tts_en.png" style="height: 600px; width: auto;">

### Key Features Added in 2.8.3
- Added the ability for users to select one of three options for how to handle sounds from other apps during TTS voice playback.  

### Key Features Added in 2.8.2
- Implemented multi-buffering in the Bible reading feature for smoother playback. However, on slower devices, you may need to wait briefly when starting to read.
- You can now set the TTS to stop reading at a specific verse.

<div style="display: flex; gap: 10px; overflow-x: auto; padding: 20px; background-color: #ffffffff; border-radius: 10px;">
  <img src="MyStudyBible_2_4_Images/TTS_option_end_time.PNG" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/TTS_option_end_verse.PNG" style="height: 600px; width: auto;">
</div>

- Improved support for a wider variety of Bible text files. The app now works if the Bible text column in the Bible table is named 'text', 'btext', or 'Scripture'. Additionally, if the Details table is missing or has missing columns, the app will prompt for user input and create a new Bible file named `<OriginalBibleFileName>.msb.sqlite`, which will then be used instead.

<img src="MyStudyBible_2_4_Images/Bible_Data_Support1.PNG" style="height: 600px; width: auto;">

When a compatibility issue occurs while reading a Bible text data file, a warning icon will appear next to it in the Bible selection window. The name of the affected Bible file is shown in the red box.

<img src="MyStudyBible_2_4_Images/Bible_Data_Support2.PNG" style="height: 600px; width: auto;">

When you tap on a Bible version with a warning icon, you'll see the filename along with fields that are auto-filled below for you to edit.

<img src="MyStudyBible_2_4_Images/Bible_Data_Support3.PNG" style="height: 600px; width: auto;">

Let's say the user has edited the fields as shown above. Now tap Save to exit the screen.

<img src="MyStudyBible_2_4_Images/Bible_Data_Support4.PNG" style="height: 600px; width: auto;">

You'll see a confirmation message like the one above, explaining that a new file (e.g., KoreanBible.msb.sqlite) will be created from the original file (e.g., KoreanBible.bbl.mybible) with the modifications you just made. Tap Save.

<img src="MyStudyBible_2_4_Images/Bible_Data_Support5.PNG" style="height: 600px; width: auto;">

Now in the Bible selection window, the original file with the warning is removed from the list, and the newly created file appears instead.

<img src="MyStudyBible_2_4_Images/Bible_Data_Support6.PNG" style="height: 600px; width: auto;">

As shown above, you can verify in the Files app that a new file (e.g., KoreanBible.msb.sqlite) has been created in the bible folder.
This feature will continue to be improved to support more Bible files in the future.

### Key Features Added in 2.8.0
- The search window is now larger on iPad.
- You can select multiple Bible versions to search through in the search settings, and the search results will show verse content from all selected versions.
<img src="MyStudyBible_2_4_Images/search_result_selected_bible.PNG" style="height: 600px; width: auto;">
<img src="MyStudyBible_2_4_Images/search_option.PNG" style="height: 600px; width: auto;">

- Strong's code number search has been added. You can search with H123 or G123 (H for Hebrew, G for Greek), or just search with numbers only to search both Hebrew and Greek. Note that the Strong's dictionary file must be in the dict folder, and a Bible version file containing Strong's codes must be in the bible folder for this to work properly.
<img src="MyStudyBible_2_4_Images/search_result_strong_nr.PNG" style="height: 600px; width: auto;">
<img src="MyStudyBible_2_4_Images/search_result_strong_dict.PNG" style="height: 600px; width: auto;">

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

