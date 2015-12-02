# Mbond65-Gmod-Model-Util-Collection
A collection of programs and scripts to help decompile and compile steam workshop items

<h3>About</h3>

This repository contains a set of programs and scripts to help people decompile and recompile steam workshop items, it's a collection I've put
together to save people time doing this themselfs. The tools included in this repository allow you to download models directly from the steam
workshop, decompile them, edit them as required and recompile them.

<h3>What's included</h3>

I've only recently started working with these programs so I'm not an expert in how they function by any means, I will just list what
their purpose is in the process below:

<b>7zip</b> - Used to extract compressed files downloaded directly from the Steam Workshop

<b>Crowbar</b> - Used to decompile MDL files

<b>GMADExtractor</b> - A basic GUI for extracting the file extracted using 7zip; Gmod already comes with a GMAD extractor (https://github.com/garrynewman/gmad), I've
personally found GMADExtractor to be better

<b>GUIStudioMDL</b> - Used to recompile MDL files

<b>MDLTextureInfo</b> - Used to verify MDL files are contain the correct texture paths and what VMT files they require to function

<b>Powershell Scripts</b> - Contains a script which renames the texture paths in VMT files, this is important if you want to upload
your model to a FastDL server to distribute content to clients and want the paths to be changed to something other than what the model
creator set them as

<b>JSTamperScript</b> - This is a script which works with the TamperMonkey browser plugin, it essentially adds a download button on
steam workshop pages and called a download URL once pressed, allowing you to download the file directly rather than subscribing to it

