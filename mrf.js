var fs = require('fs')
var data = "import React, { Component } from 'react';\r\nimport { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, Dimensions, Image } from 'react-native';\r\n\r\n\r\nexport default class "+process.argv[2]+" extends Component{\r\n  constructor("+`${process.argv[3]? 'props' : ''}`+"){\r\n    super("+`${process.argv[3]? 'props' : ''}`+")\r\n    this.state={ }\r\n  }\r\n\r\n}\r\n\r\nconst styles = StyleSheet.create({\r\n\r\n\r\n})"
fs.writeFileSync(process.cwd()+'/'+process.argv[2]+'.js', data)