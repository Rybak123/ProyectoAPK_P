package com.example.proyecto_apk.ui.home.ControlDeAnimo;

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
import com.example.proyecto_apk.ui.home.ControlDeEstudio.CalendarioControlDeEstudio;


public class controlDeAnimo extends Fragment implements View.OnClickListener {
  private Button btn_irCalendario;
  private Button btn_actualizarAnimo_Emocionado;
  private Button btn_actualizarAnimo_Triste;
  private Button btn_actualizarAnimo_Productivo;
  private Button btn_actualizarAnimo_Feliz;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
      View root=inflater.inflate(R.layout.fragment_control_de_animo, container, false);
      btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario_animo);
      btn_actualizarAnimo_Emocionado=root.findViewById(R.id.id_controlDeAnimo_Emocionado);
      btn_actualizarAnimo_Triste=root.findViewById(R.id.id_controlDeEmocion_Triste);
      btn_actualizarAnimo_Productivo=root.findViewById(R.id.id_controlDeEmocion_Productivo);
      btn_actualizarAnimo_Feliz=root.findViewById(R.id.id_controlDeAnimo_feliz);
      btn_actualizarAnimo_Emocionado.setOnClickListener(this);
      btn_actualizarAnimo_Triste.setOnClickListener(this);
      btn_actualizarAnimo_Productivo.setOnClickListener(this);
      btn_actualizarAnimo_Feliz.setOnClickListener(this);
      btn_irCalendario.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new calendarioControlDeAnimo());
          transaction.commit();
        }
      });
      return root;
    }

  @Override
  public void onClick(View view) {
    MandarPeticionOperacionsPaciente peticion=new MandarPeticionOperacionsPaciente(getContext());
    switch (view.getId()){
      case R.id.id_controlDeAnimo_Emocionado:
        peticion.actualizaControlDeAnimo("Emcionado", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeEmocion_Triste:
        peticion.actualizaControlDeAnimo("Triste", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeEmocion_Productivo:
        peticion.actualizaControlDeAnimo("Productivo", new I_ActualizarControlDeActividad() {
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
      case R.id.id_controlDeAnimo_feliz:
        peticion.actualizaControlDeAnimo("Feliz", new I_ActualizarControlDeActividad() {
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
