<!-- TOC depthTo:2 orderedList:true -->

1. [Tweaks](#tweaks)
2. [Keyboard input](#keyboard-input)

<!-- /TOC -->

## Tweaks

Edit `%ProgramFiles%\Unity\Editor\Data\Resources\ScriptTemplates\81-C# Script-NewBehaviourScript.cs.txt`

Make custom Game resolution (1280x720) and set Camera Size to 3.6

## Keyboard input

``` cs
public Text text;

if (Input.GetKeyDown(KeyCode.Space))
{
    text.text = "Space key pressed";
}
```
