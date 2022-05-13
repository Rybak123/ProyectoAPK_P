package com.example.proyecto_apk.ui.home.ControlDeSueno;

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
import com.example.proyecto_apk.Interfaces.I_ActualizarControlDeActividad;
import com.example.proyecto_apk.R;


public class controlDeSueno extends Fragment implements View.OnClickListener {

  private Button btn_irCalendario;
  private Button btn_actualizarSueno10horas;
  private Button btn_actualizarSueno9horas;
  private Button btn_actualizarSueno8horas;
  private Button btn_actualizarSueno7horas;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root=inflater.inflate(R.layout.fragment_control_de_sueno, container, false);
        btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario_sueno);
        btn_actualizarSueno10horas=root.findViewById(R.id.id_controlDeSueno_btn10horas);
        btn_actualizarSueno9horas=root.findViewById(R.id.id_controlDeSueno_btn9horas);
        btn_actualizarSueno8horas=root.findViewById(R.id.id_controlDeSueno_btn8horas);
        btn_actualizarSueno7horas=root.findViewById(R.id.id_controlDeSueno_btn7horas);
        btn_actualizarSueno10horas.setOnClickListener(this);
        btn_actualizarSueno9horas.setOnClickListener(this);
        btn_actualizarSueno8horas.setOnClickListener(this);
        btn_actualizarSueno7horas.setOnClickListener(this);
        btn_irCalendario.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new calendarioControlDeSueno());
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
      case R.id.id_controlDeSueno_btn10horas:
            peticion.actualizaControlDeSueno("10 Horas", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeSueno_btn9horas:
        peticion.actualizaControlDeSueno("9 Horas", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeSueno_btn8horas:
        peticion.actualizaControlDeSueno("8 Horas", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeSueno_btn7horas:
        peticion.actualizaControlDeSueno("7 Horas", new I_ActualizarControlDeActividad() {
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
