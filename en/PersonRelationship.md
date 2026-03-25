# Person Relationship Feature

MyStudyBible includes a built-in feature for tracking and managing relationships between biblical characters. You can create persons, define their relationships, link them to Bible verses, and explore relationship networks — all directly within the app.

## Overview

Biblical characters often have complex relationships. The same person may be known by different names at different periods, and many people share the same name. This feature helps you organize and navigate these connections as you study the Bible.

All person relationship data is stored in the `person_relationships.sqlite` file under the `user_data` folder. When iCloud sync is enabled, this data is shared across your iPhone, iPad, and Mac.

## How to Access

### Viewing Person Relationships
- When a verse has persons linked to it, a **person icon** (person.circle.fill) appears after the verse text.
- Tap the person icon to open the **Relationship Explorer** window, which shows:
  - The persons appearing in that verse
  - The selected person's related persons with relationship types
  - Related verse links — tap to view the verse content in a popup

### Editing Person Relationships
- **Double-tap** on any verse to open the context menu.
- Select **"Edit Person Relationship"** to open the person relationship editor.

## Creating a Person

In the person relationship editor, you can choose between two modes:

- **Select Existing Person**: Choose a person already registered in the database as the reference person.
- **Create New Person**: Create a new person entry.

When creating a new person, you can enter:

1. **Person Name**: The primary name of the character (e.g., "Noah", "Shem").
2. **Additional Info**: A brief description (e.g., "Japheth's brother, lived 602 years").
3. **Aliases**: Alternative names or nicknames for the same person. You can add multiple aliases.
4. **Related Verses**: Bible verses associated with this person (e.g., "Genesis 10:21").

<img src="MyStudyBible_2_4_Images/person_relation4.png" style="height: 600px; width: auto;">

## Auto-Linking Verses

When a new person is created, the app automatically searches the entire default Bible for the person's name and aliases, and registers all matching verses as "appearing characters."

> **Note**: This may cause partial matches. For example, creating a person named "Ham" might also match verses containing the word "hammer." You can manually remove incorrect links by tapping the X button next to the person in the relationship viewer.

### Exclusion Words

To prevent unwanted partial matches, you can add **exclusion words** when editing a person's appearing characters. For example, adding "hammer" as an exclusion word for "Ham" will prevent verses containing "hammer" from being linked to "Ham."

## Defining Relationships

In the relationship settings section of the editor, you can:

1. **Add Related Person**: Tap the "+" button to add a new relationship entry.
2. **Related Person Name**: Enter or select the name of the related person.
3. **Relationship Type**: Define the relationship from the reference person's perspective (e.g., "Father", "Son", "Brother", "Wife").
4. **Related Verses**: Optionally add Bible verses that are relevant to this specific relationship.

Relationships are **bidirectional** — from the reference person's perspective. For example, if Noah is the reference person and Shem is defined as his "Son", then when viewing from Shem's perspective, Noah will appear as his "Father."

<img src="MyStudyBible_2_4_Images/person_relation5.png" style="height: 600px; width: auto;">

## Exploring Relationships

Tap the **person icon** next to a verse to open the Relationship Explorer:

- **Persons appearing in this verse**: Shows all persons linked to the current verse. Tap the X button to remove a person from this verse.
- **Reference Person**: Shows the selected person's description and related verses. Tap a verse link to view its content in a popup.
- **Related Persons**: Lists all persons related to the reference person, showing the relationship type (e.g., Father, Son, Brother) and description. Tap the arrow button to navigate to that person's relationships.

<div style="display: flex; gap: 10px; overflow-x: auto; padding: 20px; background-color: #ffffffff; border-radius: 10px;">
  <img src="MyStudyBible_2_4_Images/person_relation2.png" style="height: 600px; width: auto;">
  <img src="MyStudyBible_2_4_Images/person_relation3.png" style="height: 600px; width: auto;">
</div>

## Deleting Persons and Relationships

- **Delete a relationship**: In the editor, tap the red minus button next to a related person to remove that relationship.
- **Delete a person entirely**: In the editor, tap the "Delete Person" button to remove the person and all their relationships.
- **Remove a person from a verse**: In the relationship viewer, tap the X button next to a person's name to unlink them from the current verse.
- **Swipe to delete**: In the person selection window, swipe a person's name to the left to delete them.

## Tips

- Relationship data must be entered manually by the user. Take your time building up the relationship network as you study.
- Use the **aliases** field for characters known by multiple names (e.g., "Jacob" / "Israel", "Simon" / "Peter").
- The relationship explorer lets you navigate between related persons by tapping the arrow buttons, making it easy to explore family trees and other connections.
- All data is stored locally and synced via iCloud when enabled, so your work is preserved across devices.
