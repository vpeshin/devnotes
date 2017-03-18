<!-- TOC depthTo:2 orderedList:true -->

1. [Settings](#settings)
2. [Keyboard input](#keyboard-input)
3. [Tips](#tips)

<!-- /TOC -->

## Settings

- Edit `%ProgramFiles%\Unity\Editor\Data\Resources\ScriptTemplates\81-C# Script-NewBehaviourScript.cs.txt`

- Make custom Game resolution (1280x720) and set Camera Size to 3.6

- Set VSCode as default editor:
    - Assets => VSCode
    - Preferences => VSCode => Enable Integration
    - Instal extensions in VSCode: *C#*, *C# Extensions*, *Debugger for Unity*, *Unity Tools*, *Unity Snippets*

## Keyboard input

``` cs
public Text text;

if (Input.GetKeyDown(KeyCode.Space))
{
    text.text = "Space key pressed";
}
```


## Tips

- First make a design document