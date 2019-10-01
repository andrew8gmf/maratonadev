import 'package:flutter/material.dart';
import 'package:pizzaria/pages/login.dart';
import 'package:pizzaria/routes.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primaryColor: Colors.black,
        cursorColor: Colors.black
      ),
      home: LoginPage(),
      routes: routes,
    );
  }
}