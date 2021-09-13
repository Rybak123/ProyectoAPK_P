package com.example.proyecto_apk.ui.home.ControlDeEstudio;

import android.graphics.Color;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.applandeo.materialcalendarview.CalendarView;
import com.applandeo.materialcalendarview.EventDay;
import com.applandeo.materialcalendarview.listeners.OnDayClickListener;
import com.example.proyecto_apk.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;


public class CalendarioControlDeEstudio extends Fragment {

    private Button btn_volver;
    List<EventDay> events;
    JSONArray diasDeEstudio;


    public CalendarioControlDeEstudio() {

    }

    View root;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

      getPacienteObject();

      root=inflater.inflate(R.layout.fragment_calendario_control_de_estudio, container, false);
        btn_volver=root.findViewById(R.id.id_CalendarioDeSueno_volver);
        btn_volver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentManager manager = getFragmentManager();
                FragmentTransaction transaction = manager.beginTransaction();
                transaction.replace(R.id.id_AgendaVirtualFragment, new ControlDeEstudio());
                transaction.commit();
            }
        });


      CalendarView calendarView = (CalendarView) root.findViewById(R.id.calendarView_ControlDeEstudio);
      calendarView.setOnDayClickListener(new OnDayClickListener() {
        @Override
        public void onDayClick(EventDay eventDay) {
          Calendar clickedDayCalendar = eventDay.getCalendar();
          int year=clickedDayCalendar.get(Calendar.YEAR);
          int month=clickedDayCalendar.get(Calendar.MONTH);
          int day=clickedDayCalendar.get(Calendar.DAY_OF_MONTH);

          for(int i=0;i<diasDeEstudio.length();i++){
            JSONObject diaDeEstudio1= null;
            try {
              diaDeEstudio1 = diasDeEstudio.getJSONObject(i);
              String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
              int year1=Integer.parseInt(fechaJson[0]);
              int month1=Integer.parseInt(fechaJson[1])-1;
              int day1=Integer.parseInt(fechaJson[2]);

              if(year==year1 && month==month1 && day==day1){
                String message="";

                JSONArray materias=diaDeEstudio1.getJSONArray("materiasEstudiadas");

                for(int j=0;j<materias.length();j++){
                   String cantidadDeTiempo= materias.getJSONObject(j).getString("cantidadDeTiempo");
                   String materia=materias.getJSONObject(j).getString("materia");

                   message+=cantidadDeTiempo+"\n"+materia+"\n";
                }
                Toast.makeText(getContext(), message, Toast.LENGTH_SHORT).show();

              }

            } catch (JSONException e) {
              e.printStackTrace();
            }

          }

        }
      });

        return root;
    }
    public void getObjectAndCallToDoSomething(JSONObject paciente){
      this.events = new ArrayList<>();
      try {
        JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
        JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeEstudio");
        diasDeEstudio=controlDeEstudio.getJSONArray("diasDeEstudio");
        for(int i=0;i<diasDeEstudio.length();i++){
          JSONObject diaDeEstudio1=diasDeEstudio.getJSONObject(i);
          String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
          Calendar fecha=Calendar.getInstance();
          fecha.set(Integer.parseInt(fechaJson[0]),Integer.parseInt(fechaJson[1])-1,Integer.parseInt(fechaJson[2]));
          events.add(new EventDay(fecha, R.drawable.libro, Color.parseColor("#228B22")));
          CalendarView calendarView = (CalendarView) root.findViewById(R.id.calendarView_ControlDeEstudio);
          calendarView.setEvents(events);
        }
      } catch (JSONException e) {
        e.printStackTrace();
      }

    }

  private void getPacienteObject() {

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
          getObjectAndCallToDoSomething(response);
        }
      }, new Response.ErrorListener() {

        @Override
        public void onErrorResponse(VolleyError error) {
          Toast.makeText(getContext(), error.toString(), Toast.LENGTH_SHORT).show();

        }
      });
    RequestQueue queue = Volley.newRequestQueue(getContext());
    queue.add(jsonObjectRequest);
  }
}
