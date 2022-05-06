import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Mass {
  String baseUrl = "http://192.168.1.244:3000/showMass";
  Future<SingleChildScrollView> getAllMass() async {
    try {
      var response = await http.get(Uri.parse(baseUrl));
      if (response.statusCode == 200) {
         //final json = "[" + response.body + "]";
       // print(json);
        return jsonDecode(response.body)  ;
      } else {
        return Future.error("Server Error");
      }
    } catch (e) {
      return Future.error(e);
    }
  }
}
