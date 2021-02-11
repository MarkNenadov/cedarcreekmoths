#!/bin/bash

NPM_BIN=/usr/bin/npm
WEBSITE_ROOT=/websites/wondersofnature

$NPM_BIN i;
$NPM_BIN run build;
/bin/rm -rf $WEBSITE_ROOT/build;
/bin/mv build $WEBSITE_ROOT/;