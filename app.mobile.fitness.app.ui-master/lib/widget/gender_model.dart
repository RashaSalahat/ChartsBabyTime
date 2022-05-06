// To parse this JSON data, do
//
//     final welcome = welcomeFromJson(jsonString);

import 'dart:convert';

List<Welcome> welcomeFromJson(String str) => List<Welcome>.from(json.decode(str).map((x) => Welcome.fromJson(x)));

String welcomeToJson(List<Welcome> data) => json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class Welcome {
    Welcome({
        required this.id,
        required this.name,
        required this.percent,
        required this.day,
        
    });

    String id;
    String name;
    int percent;
    String day;
    

    factory Welcome.fromJson(Map<String, dynamic> json) => Welcome(
        id: json["_id"],
        name: json["name"],
        percent: json["percent"],
        day: json["day"],
       
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "name": name,
        "percent": percent,
        "day": day,
        
    };
}

