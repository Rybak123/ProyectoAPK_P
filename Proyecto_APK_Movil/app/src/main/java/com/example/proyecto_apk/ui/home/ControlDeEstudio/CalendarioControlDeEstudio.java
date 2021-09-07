package com.example.proyecto_apk.ui.home.ControlDeEstudio;

import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.JsonRequest;
import com.android.volley.toolbox.Volley;
import com.applandeo.materialcalendarview.CalendarView;
import com.applandeo.materialcalendarview.EventDay;
import com.applandeo.materialcalendarview.listeners.OnDayClickListener;
import com.example.proyecto_apk.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URL;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class CalendarioControlDeEstudio extends Fragment {

    private Button btn_volver;

    JSONObject paciente;

    public CalendarioControlDeEstudio() {

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

      String url = "http://192.168.0.14:4000/pacientes/actualizarHorasDeEstudio";

      JSONObject diaDeEstudio=new JSONObject();
      try {
        diaDeEstudio.put("cantidadDeTiempo",0);
        diaDeEstudio.put("materia","Lenguas");
      } catch (JSONException e) {
        e.printStackTrace();
      }
      JSONArray materiasEstudiadas=new JSONArray();
      materiasEstudiadas.put(diaDeEstudio);

      JSONObject jsonObject=new JSONObject();
      try {
        jsonObject.put("carnetDeIdentidad", "9219961");
        jsonObject.put("fecha", "2021-09-05");
        jsonObject.put("MateriasEstudiadas",materiasEstudiadas);
      } catch (JSONException e) {
        e.printStackTrace();
      }

      JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
        (Request.Method.POST, url,jsonObject, new Response.Listener<JSONObject>() {

          @Override
          public void onResponse(JSONObject response) {
            paciente=response;
          }
        }, new Response.ErrorListener() {

          @Override
          public void onErrorResponse(VolleyError error) {
            Toast.makeText(getContext(), error.toString(), Toast.LENGTH_SHORT).show();

          }
        });
       RequestQueue queue = Volley.newRequestQueue(getContext());
       queue.add(jsonObjectRequest);

      try {
        JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
        JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeEstudio");
        JSONArray diasDeEstudio=controlDeEstudio.getJSONArray("diasDeEstudio");
        for(int i=0;i<diasDeEstudio.length();i++){
          JSONObject diaDeEstudio1=diasDeEstudio.getJSONObject(i);
          String[] fechaJson=diaDeEstudio1.getString("fecha").split("-");
          Calendar fecha=Calendar.getInstance();
          fecha.set(Integer.getInteger(fechaJson[0]),Integer.getInteger(fechaJson[1]),Integer.getInteger(fechaJson[2]));
        }
      } catch (JSONException e) {
        e.printStackTrace();
      }
      Toast.makeText(getContext(), paciente.toString(), Toast.LENGTH_SHORT).show();

      View root=inflater.inflate(R.layout.fragment_calendario_control_de_estudio, container, false);
        btn_volver=root.findViewById(R.id.id_CalendarioControlDeEstudioF_btn_volver);
        btn_volver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentManager manager = getFragmentManager();
                FragmentTransaction transaction = manager.beginTransaction();
                transaction.replace(R.id.id_AgendaVirtualFragment, new ControlDeEstudio());
                transaction.commit();
            }
        });

      List<EventDay> events = new ArrayList<>();
      CalendarView calendarView = (CalendarView) root.findViewById(R.id.calendarView);
      calendarView.setOnDayClickListener(new OnDayClickListener() {
        @Override
        public void onDayClick(EventDay eventDay) {
          Calendar clickedDayCalendar = eventDay.getCalendar();
          Toast.makeText(getContext(), clickedDayCalendar.getTime().toString(), Toast.LENGTH_SHORT).show();

        }
      });

        return root;
    }
}
