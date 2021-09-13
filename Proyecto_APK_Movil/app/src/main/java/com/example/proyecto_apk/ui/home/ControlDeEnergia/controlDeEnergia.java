package com.example.proyecto_apk.ui.home.ControlDeEnergia;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.ConeccionConElServidor.MandarPeticionOperacionsPaciente;
import com.example.proyecto_apk.ConeccionConElServidor.OperacionesPaciente;
import com.example.proyecto_apk.Interfaces.I_ActualizarControlDeActividad;
import com.example.proyecto_apk.Interfaces.VolleyCallback;
import com.example.proyecto_apk.R;
import com.example.proyecto_apk.ui.home.ControlDeEstudio.CalendarioControlDeEstudio;

import org.json.JSONObject;

public class controlDeEnergia extends Fragment implements View.OnClickListener{
  private Button btn_irCalendario;
  private Button btn_actualizarSueno100Porciento;
  private Button btn_actualizarSueno75Porciento;
  private Button btn_actualizarSueno50Porciento;
  private Button btn_actualizarSueno25Porciento;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
      View root=inflater.inflate(R.layout.fragment_control_de_energia, container, false);
      btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario_energia);
      btn_actualizarSueno100Porciento=root.findViewById(R.id.id_controlDeEnergia_100Porciento);
      btn_actualizarSueno75Porciento=root.findViewById(R.id.id_controlDeEnergia_45Porciento);
      btn_actualizarSueno50Porciento=root.findViewById(R.id.id_controlDeEnergia_50Porciento);
      btn_actualizarSueno25Porciento=root.findViewById(R.id.id_controlDeEnergia_25Porciento);
      btn_actualizarSueno100Porciento.setOnClickListener(this);
      btn_actualizarSueno75Porciento.setOnClickListener(this);
      btn_actualizarSueno50Porciento.setOnClickListener(this);
      btn_actualizarSueno25Porciento.setOnClickListener(this);

      btn_irCalendario.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new calendarioControlDeEnergia());
          transaction.commit();
        }
      });
      return root;
    }

  @SuppressLint("NonConstantResourceId")
  @Override
  public void onClick(View view) {
    MandarPeticionOperacionsPaciente peticion=new MandarPeticionOperacionsPaciente(getContext());
    switch (view.getId()){
      case R.id.id_controlDeEnergia_100Porciento:
        peticion.actualizaControlDeEnergia("100 Porciento", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeEnergia_45Porciento:
        peticion.actualizaControlDeEnergia("75 Porciento", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeEnergia_50Porciento:
        peticion.actualizaControlDeEnergia("50 Porciento", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeEnergia_25Porciento:
        peticion.actualizaControlDeEnergia("25 Porciento", new I_ActualizarControlDeActividad() {
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
