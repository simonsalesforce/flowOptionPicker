# flowOptionPicker
A Flow screen component which lets you create and select categories. A variable is updated immediately which can be used in screen actions and component visibility. Allows for Labels (required), Icons and Descrption (optional) as well as a default selection and a 'Special' selection e.g. no filters. Min px width and fits to area.

Features

Options per row dynamically fit to screen size, taking into account  the minimum card size

A single option can be chosen as ‘special’ and elevated to it’s own row with visual changes – useful as an ‘ALL or NONE’ option

If desired, it can show icons and descriptions for each option

The selected option updates an output variable which can be used immediately in screen actions or component visibility

Variables

Label (required) – the option name presented to the user

Keys (required) – the specific string to be used in the output variable when an option is selected (can be the same as the label)

Description (optional) – A short description string of the option which is can be shown in the card
Icon (optional) – Show a left aligned icon from available SLDS2 icons

Default Selected Key (optional) – Lets you set a default selection on first load

Special Key (optional) – Promotes one option to be visually different. Intended to be used for ‘ALL’ or ‘NONE’ values in a filter

Minimum Card Width (260px default) – Sets minimum width of the card to help with longer descriptions and help fit options to screen widths

Visual Density – Adjust the padding of the cards to present a compact or comfortable version 
<img width="2303" height="756" alt="image" src="https://github.com/user-attachments/assets/706da90e-78a2-4092-86ab-3b9aa13c748c" />


