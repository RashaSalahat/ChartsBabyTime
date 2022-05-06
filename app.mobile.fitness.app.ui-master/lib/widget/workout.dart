import 'package:flutter/material.dart';
import 'package:fitness_ui_kit/network/network_helper.dart';
import 'gender_model.dart';

//     final welcome = welcomeFromJson(jsonString);

class BarChartAPI extends StatefulWidget {
  const BarChartAPI({Key? key}) : super(key: key);

  @override
  State<BarChartAPI> createState() => _BarChartAPIState();
}

class _BarChartAPIState extends State<BarChartAPI> {
  List<Welcome> genders = [];
  bool loading = true;
  

  NetworkHelper _networkHelper = NetworkHelper();

  @override
  void initState() {
    super.initState();
    getData();
  }

  void getData() async {
    // response is json string
    var response =
        await _networkHelper.get("http://192.168.1.244:3000/showusers");
    List<Welcome> tempdata = welcomeFromJson(response.body);
    
  print(tempdata.toList().elementAt(0).id);
  print(tempdata.toList().length);
  print(tempdata.toList().elementAt(1).id);
  print(tempdata.toList().elementAt(2).id);
  print(tempdata.toList().elementAt(3).id);
  print(tempdata.toList().elementAt(4).id);
  print(tempdata.toList().elementAt(5).id);
  print(tempdata.toList().elementAt(6).percent.toDouble());
    setState(() {
      genders = tempdata;
      loading = false;
    });
  }
    Widget build(BuildContext context) {
    return Scaffold(
          body: Center(
        child: loading
            ? CircularProgressIndicator()
            : Container(
                height: 300,

              ),
      ),

    );
  }

}
