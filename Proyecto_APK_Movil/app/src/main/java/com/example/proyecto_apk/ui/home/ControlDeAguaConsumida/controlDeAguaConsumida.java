package com.example.proyecto_apk.ui.home.ControlDeAguaConsumida;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Switch;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.applandeo.materialcalendarview.CalendarView;
import com.applandeo.materialcalendarview.EventDay;
import com.example.proyecto_apk.ConeccionConElServidor.MandarPeticionOperacionsPaciente;
import com.example.proyecto_apk.Interfaces.I_ActualizarControlDeActividad;
import com.example.proyecto_apk.PacienteLogueado;
import com.example.proyecto_apk.R;
import com.example.proyecto_apk.ui.home.ControlDeEstudio.CalendarioControlDeEstudio;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class controlDeAguaConsumida extends Fragment implements View.OnClickListener {
  private Button btn_irCalendario;
  private Button btn_actualizarAnimo_1LitroYMedio;
  private Button btn_actualizarAnimo_1Litro;
  private Button btn_actualizarAnimo_3vasos;
  private Button btn_actualizarAnimo_2vasos;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
      View root=inflater.inflate(R.layout.fragment_control_de_agua_consumida, container, false);
      btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario_aguaConsumida);
      btn_actualizarAnimo_1LitroYMedio=root.findViewById(R.id.id_controlAgua_1LitroYMedio);
      btn_actualizarAnimo_1Litro=root.findViewById(R.id.id_controlAgua_1Litro);
      btn_actualizarAnimo_3vasos=root.findViewById(R.id.id_controlAgua_3vasos);
      btn_actualizarAnimo_2vasos=root.findViewById(R.id.id_controlAgua_2vasos);
      btn_actualizarAnimo_1LitroYMedio.setOnClickListener(this);
      btn_actualizarAnimo_1Litro.setOnClickListener(this);
      btn_actualizarAnimo_3vasos.setOnClickListener(this);
      btn_actualizarAnimo_2vasos.setOnClickListener(this);
      btn_irCalendario.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new calendarioAguaConsumida());
          transaction.commit();
        }
      });
      return root;
    }

  @Override
  public void onClick(View view) {
    MandarPeticionOperacionsPaciente peticion=new MandarPeticionOperacionsPaciente(getContext());
    switch (view.getId()){
      case R.id.id_controlAgua_1LitroYMedio:
        peticion.actualizaControlDeAgua("8 Vasos", new I_ActualizarControlDeActividad() {
          @Override
          public void onSuccess(Boolean respuesta, Context context) {
            Toast.makeText(context, "Fecha registrada con exito", Toast.LENGTH_SHORT).show();
          }

          @Override
          public void onErrorResponse(VolleyError error, Context context) {
            Toast.makeText(context, "Error", Toast.LENGTH_SHORT).show();
          }
        });
        break;
      case R.id.id_controlAgua_1Litro:
        peticion.actualizaControlDeAgua("7 Vasos", new I_ActualizarControlDeActividad() {
          @Override
          public void onSuccess(Boolean respuesta, Context context) {
            Toast.makeText(context, "Fecha registrada con exito", Toast.LENGTH_SHORT).show();
          }

          @Override
          public void onErrorResponse(VolleyError error, Context context) {
            Toast.makeText(context, "Error", Toast.LENGTH_SHORT).show();
          }
        });
        break;
      case R.id.id_controlAgua_3vasos:
        peticion.actualizaControlDeAgua("5 Vasos", new I_ActualizarControlDeActividad() {
          @Override
          public void onSuccess(Boolean respuesta, Context context) {
            Toast.makeText(context, "Fecha registrada con exito", Toast.LENGTH_SHORT).show();
          }

          @Override
          public void onErrorResponse(VolleyError error, Context context) {
            Toast.makeText(context, "Error", Toast.LENGTH_SHORT).show();
          }
        });
        break;
      case R.id.id_controlAgua_2vasos:
        peticion.actualizaControlDeAgua("3 Vasos", new I_ActualizarControlDeActividad() {
          @Override
          public void onSuccess(Boolean respuesta, Context context) {
            Toast.makeText(context, "Fecha registrada con exito", Toast.LENGTH_SHORT).show();
          }

          @Override
          public void onErrorResponse(VolleyError error, Context context) {
            Toast.makeText(context, "Error", Toast.LENGTH_SHORT).show();
          }
        });
        break;
    }
  }
}
