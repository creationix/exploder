#!/bin/sh
palm-package web
palm-install *.ipk
palm-launch org.nodejs.camp.exploder
rm *.ipk
