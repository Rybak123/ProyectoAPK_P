package com.example.proyecto_apk.ui.home.ControlDeEnergia;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;

import androidx.annotation.NonNull;
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
import com.example.proyecto_apk.ConeccionConElServidor.OperacionesPaciente;
import com.example.proyecto_apk.ConeccionConElServidor.VerActividadPaciente;
import com.example.proyecto_apk.Interfaces.I_DevolverActividad;
import com.example.proyecto_apk.Interfaces.I_ObtenerControlDeActividadesPaciente;
import com.example.proyecto_apk.PacienteLogueado;
import com.example.proyecto_apk.R;
import com.example.proyecto_apk.ui.home.ControlDeAnimo.calendarioControlDeAnimo;
import com.example.proyecto_apk.ui.home.ControlDeAnimo.controlDeAnimo;
import com.example.proyecto_apk.ui.home.ControlDeEstudio.ControlDeEstudio;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;


public class calendarioControlDeEnergia extends Fragment {

  private Button btn_volver;
  private View root;
  private CalendarView calendarView;

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                           Bundle savedInstanceState) {

    root = inflater.inflate(R.layout.fragment_calendario_control_de_energia, container, false);
    btn_volver = root.findViewById(R.id.id_CalendarioDeSueno_volver);
    calendarView = (CalendarView) root.findViewById(R.id.calendarView_ControlDeEnergia);
    cargarDatosCalendario();
    btn_volver.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {
        FragmentManager manager = getFragmentManager();
        FragmentTransaction transaction = manager.beginTransaction();
        transaction.replace(R.id.id_AgendaVirtualFragment, new controlDeEnergia());
        transaction.commit();
      }
    });
    calendarView.setOnDayClickListener(new OnDayClickListener() {
      @Override
      public void onDayClick(@NonNull EventDay eventDay) {
        VerActividadPaciente operaciones=new VerActividadPaciente(getContext());
        operaciones.verContenidoActividad_ControlDeEnergia(eventDay.getCalendar(), new I_DevolverActividad() {
          @Override
          public void onSuccess(StringBuilder respuesta, Context context) {
            Toast.makeText(context, respuesta.toString(), Toast.LENGTH_SHORT).show();
          }

          @Override
          public void onErrorResponse(VolleyError error, Context context) {

          }
        });
      }
    });
    return root;
  }
  public void cargarDatosCalendario(){
    OperacionesPaciente operaciones=new OperacionesPaciente(getContext());
    operaciones.obtenerControlDeEnergia(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {

        List<EventDay> events=operaciones.convertirAEventoCalendario(listaDeEventos,context);
        calendarView.setEvents(events);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        Toast.makeText(context, ""+error, Toast.LENGTH_SHORT).show();
      }
    });
  }
}
