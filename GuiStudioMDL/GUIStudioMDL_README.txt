GUI StudioMDL 2.2/Source - GUI wrapper for the Source model compiler
=====================================================================

(c) 2007 Neil 'Jed' Jedrzejewski
jed@wunderboy.org
http://www.wunderboy.org/

Current version can be found at the above web site.

Introduction
=============
GUI StudioMDL provides access to all the same functions and parameters as
the DOS based Source StudioMDL compiler, but through a simple, lightweight(ish)
Windows based graphical user interface.

The latest version adds support for the EP1 and Orange Box versions of the SDK
compilers in one application. This means you can swap between them as need
without having to set any SDK launcher settings.


Installation
============

Place GUIStudioMDL.exe in a location of your choosing, although I would recommend
placing it in your Source SDK "bin" folder along with the rest of the SDK tools.

If you create a desktop short-cut to GUI StudioMDL you can drag QC files onto it
and they will be automatically opened and loaded.


How to Use
==========

The first time you run GUIStudioMDL you will get a message telling you that your
SDK Tool Paths aren't yet set. What you need to do is tell it where the studiomdl.exe
is located for EP1 based games and Orange Box based games. These are usually located
in the following folders:

\sourcesdk\bin\ep1\bin		<- EP1 Tools
\sourcesdk\bin\orangebox\bin	<- Orange Box Tools

Use the "Config" menu to set these two paths.

Once this is done the drop-down list will be filled with the names of games/mods
from your GameConfig.txt file. Switching between SDK versions reloads the list 
and up-dates it with the names of games which use that SDK.

If your game/mod is not included in the drop-down list, this is because it isnt in
the SDK's game config file. You can do a quick-fix by using the "Add" button to 
browse to your game/mod folder and select the GameInfo.txt. For a more premanent
solution, run the vconfig.exe program from within the SDK "bin" folder - this will
add your game/mod to the SDK game config so it will be available to all SDK apps.

To compile a model, load its QC file, select the game/mod and the SDK version you
are compiling the model for and then set any options you want to pass to the compiler.
Onces your ready, press the "Compile" button and off you go - its as easy as that!


Known bugs/caveats
==================

As GUIStudioMDL simply acts as a wrapper around the studiomdl.exe compiler any errors
or bugs in the compiler get carried through.

One known bug is that trying to disbale xbox processing for the EP1 compiler simply 
doesn't seem to work. No matter what options you use, it will always create a vertex
cache file for the xbox.

For Orange Box, the current compiler has some annoying residual bugs from its use with
Perforce. Although you can disable Perforce use with the options, you still get a warning
message.

Also, the Organge Box compiler doesn't seem to like compiling models for a folder that
doesn't exist. If you get errors about not being able to open a file for writing, you
may beed to create the sub-folders your model would normally be compiled into yourself.


Version History
==================

2.2.0.0 - Added support for EP1/Orange Box SDK
	- Altered configuration to only require folder location for tools.
	- Various internal updates/bug-fixes (VS2005, Unicode, etc).

2.1.0.0 - Added No Warnings option.
	  Added Xbox process option (creates .xbox files, truncates LOD to level 2).
	  Added LoD level truncating option.

2.0.1.0 - Fixed bug where it would report invalid paths constantly if configured
          paths contained spaces.

2.0.0.0 - Initial Release Version

    
License/Disclaimer
==================

You are allowed to distribute this utility freely as long as it is not for profit
and this documentation is intact and unmodified. If you do decide to distribute
it, please let me know as I'd like to know who's using it.

This software is experimental. I, Neil Jedrzejewski, assume no responsibility
whatsoever for its use by other parties, and makes no guarantees, expressed or
implied, about its quality, reliability, or any other characteristic.