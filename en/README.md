# MyStudyBible is an iPhone and iPad exclusive app.

<img src="MyStudyBible_2_4_Images/bibleAppIcon.png" width="200">

<br>

MyStudyBible is a free Bible app for iPhone and iPad available on App Stores worldwide.
When iCloud sync is enabled, all data used is stored in iCloud Drive.
This allows you to edit stored files on Mac and Windows as well.
MyStudyBible currently supports English and Korean.

### Version 2.8.2 (Coming Soon)
[View Version 2.8.2 Key Features](/en/MyStudyBible?id=key-features-added-in-282)
<br>

### Version 2.8.0 Released. (3 February 2026)
[View Version 2.8.0 Key Features](/en/MyStudyBible?id=key-features-added-in-280)
<br>

### Version 2.7.3 Released. (18 January 2026)
[View Version 2.7.3 Key Features](/en/MyStudyBible?id=key-features-added-in-273)
<br>

### Version 2.7.1 Released. (11 January 2026)
[View Version 2.7.1 Key Features](/en/MyStudyBible?id=key-features-added-in-271)
<br>

### Version 2.6.3 Released. (14 November 2025)
[View Version 2.6.3 Key Features](/en/MyStudyBible?id=key-features-added-in-263)  
<br>

### Version 2.6.1 Released (October 30, 2025)
[View Version 2.6.1 Key Features](/en/MyStudyBible?id=key-features-added-in-261)
<br>

### Version 2.6 Released (October 28, 2025)
[View Version 2.6 Key Features](/en/MyStudyBible?id=key-features-added-in-26)
<br>

### Version 2.5.5 Released (October 18, 2025)
[View Version 2.5.5 Key Features](/en/MyStudyBible?id=key-features-added-in-255)
<br>


### Releasing Version 2.5 (October 12, 2025)...

[View Version 2.5 Key Features](/en/MyStudyBible?id=key-features-added-in-25)
<br>
Hello.

After version 2.3.1, I thought I wouldn't have time for a while, but due to changes in my company situation, I was able to continue working on it.

So I was able to support the **Original Text Analysis Bibles** available from [Naver Cafe](https://cafe.naver.com/thewordkor), and **KJV Bible with Strong's codes along with Strong's dictionary**.

##### MyStudyBible App's New Feature: Person Relationship Editor/Viewer
I also added a completely new feature.
It's a feature that allows you to view and directly manage relationships between biblical characters.

In person relationships, the relationship information always changes depending on whether person A or person B is the 'reference person' or 'related person'.
From Adam's perspective, Cain is his son, and from Cain's perspective, Adam is his father.

So relationship data must be written bidirectionally.

And the Bible has many people with the same name,
And for the same person, the name mentioned may change before and after a specific period of time.
Additionally, there are various nicknames for the same person, so sometimes nicknames are written.

So whenever a new person is created or a new related person is added, at least a duplicate name check is performed.
I made it so users can choose whether to really create a new person entered by the user, or select an existing saved person.
All this information is stored in the person_relationships.sqlite file under the user_data folder in the MyStudyBible app.

Also, I made it search the current default Bible with the name and nickname of the new person entered by the user, and register all searched verses as 'appearing characters'. As a result, when a person named 'Ham' is created, every verse containing the character 'Ham', such as 'together', 'by doing so', etc., will have 'Ham' registered as an appearing character. Users must manually remove such verses from the appearing characters.
This part is very inconvenient, but I think it's unavoidable. I couldn't think of any other ideas.

However, creating and managing this person data on the iPhone wasn't efficient with the small screen.
So with the help of AI, I created a 'Person Relationship Editor' that can be used on Mac. I used Python and a library called pyQT6.

##### Person Relationship Editor (Mac, Windows)

The Person Relationship Editor uses the Bible file used in MyStudyBible, the person_relationships.sqlite file where person relationships are stored, and one additional DB file.
One additional DB file is an **MDict dictionary file**. I made it easy to get more detailed information about people using **MDict dictionaries** like _Ezra Bible Dictionary_.

And the Person Relationship Editor currently works on Mac and Windows. Please distinguish whether you will use it on Mac or Windows when downloading.

Also, to ensure that the results of work done on Mac through the Person Relationship Editor can be viewed smoothly on iPhone/iPad, I eventually added the iCloud sync feature.

##### MyStudyBible App's New Feature: iCloud Sync

When the iCloud sync feature is turned on, all files in 'On My iPhone'-> MyStudyBible in the iPhone/iPad 'Files' app are copied to the 'iCloud'->MyStudyBible folder, and from then on, all information is stored in the 'iCloud'->MyStudyBible folder.

When the iCloud sync feature is turned on on iPhone and iPad, they use the same file in the 'iCloud'->MyStudyBible folder, so synchronization occurs automatically.
Thanks to this, on Mac, you can also access all files under the 'iCloud'->MyStudyBible folder.
So if you directly select and use the person_relationships.sqlite file under the 'iCloud'->MyStudyBible->user_data' folder and the Bible file that will be the basis of person relationships in the Mac Person Relationship Editor, the modified content will also be visible on the iPhone.

For Windows, I'm still looking into how to automatically synchronize files with iCloud.
For now, it seems you'll need to copy the person_relationships.sqlite file under the user_data folder of the MyStudyBible app to Windows, work on Windows, and then copy it back to iPhone/iPad. I installed iCloud on the Windows I use, but for some reason, the MyStudyBible folder itself is not visible on Windows.. -.-

This concludes the development story related to version 2.5.

I hope this small result of mine can be of some help to those who actually study the Bible.

### Download

[MyStudyBible App Store Download](https://apps.apple.com/us/app/mystudybible/id6743988874)


[Mac Person Relationship Editor Download 1 (Naver account required to download)](https://naver.me/GRu5Mz3j)
[Mac Person Relationship Editor Download 2 (Google Drive)](https://drive.google.com/drive/folders/1A6oZ2GKBe6nNGWUiDnpRsL-aX61EcJTc?usp=sharing)

[Windows Person Relationship Editor Download 1 (Naver account required to download)](https://naver.me/GhSHwN6e)
[Windows Person Relationship Editor Download 2 (Google Drive)](https://drive.google.com/drive/folders/1B1HwnDvwVVj0a9d2tNcs3LnlOwqS0DCn?usp=sharing)

<br>
If the reading plan file was not copied along with the MyStudyBible app installation, you can download the CSV files below and import them.<br>
<br>

[Download Reading Plan File (Chronological Order - New Testament Added)](https://raw.githubusercontent.com/kleinstein/my-study-bible/main/reading_plan_files/리딩%20플랜%20연대순-신약추가.csv)<br>
[Download Reading Plan File (Biblical Order)](https://raw.githubusercontent.com/kleinstein/my-study-bible/main/reading_plan_files/리딩%20플랜%20목차순.csv)<br>
[Reading Plan File Download (Biblical Order)](https://raw.githubusercontent.com/kleinstein/my-study-bible/main/reading_plan_files/reading%20plan%20In%20biblical%20order.csv)
<br>


Contact: sungkwon dot jung at outlook dot com
