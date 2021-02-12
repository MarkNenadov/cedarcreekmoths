#!/bin/bash

GIT_BIN=/usr/bin/git
NPM_BIN=/usr/local/bin/npm
WEBSITE_ROOT=/websites/cedarcreekmoths

$GIT_BIN fetch
$GIT_BIN merge

$NPM_BIN i;
$NPM_BIN run build;

/bin/rm -rf $WEBSITE_ROOT/build;
/bin/mv build $WEBSITE_ROOT/;