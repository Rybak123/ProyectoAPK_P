package com.example.proyecto_apk;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.ConeccionConElServidor.Autenticacion;
import com.example.proyecto_apk.Interfaces.VolleyCallback;
import com.example.proyecto_apk.data.model.Paciente;

import org.json.JSONException;
import org.json.JSONObject;

public class AutenticacionActivity extends AppCompatActivity {


    Button btnAutenticarse;
    EditText tv_NombreDeUsuario;
    EditText tv_Contrasena;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_autenticacion);
        btnAutenticarse=findViewById(R.id.login_btn_Ebtrar);
        tv_NombreDeUsuario=findViewById(R.id.loginAutentication_username);
        tv_Contrasena=findViewById(R.id.loginAutentication_constrasena);
        Intent intent= new Intent (getApplicationContext(), MainActivity.class);

        btnAutenticarse.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            Autenticacion.AutenticarPaciente(tv_NombreDeUsuario.getText().toString(), tv_Contrasena.getText().toString(), getApplicationContext(), new VolleyCallback() {
              @RequiresApi(api = Build.VERSION_CODES.O)
              @Override
              public void onSuccess(JSONObject result,Context context) {
                try {
                  int carnetDeIdentidad=result.getInt("carnetDeIdentidad");
                  String nombres=result.getString("nombres");
                  String apellidos=result.getString("apellidos");
                  String lugarDeNacimiento=result.getString("lugarDeNacimiento");
                  String sexo=result.getString("sexo");
                  String numeroDeContacto=result.getString("numeroDeContacto");
                  String correoElectronico=result.getString("correoElectronico");
                  String contrasena=result.getString("contrasena");
                  String nombreDeUsuario=result.getString("nombreDeUsuario");
                  String token=result.getString("token");
                  Paciente pacienteLogueado=new Paciente();
                  pacienteLogueado.setNombres(nombres);
                  pacienteLogueado.setApellidos(apellidos);
                  pacienteLogueado.setLugarDeNacimiento(lugarDeNacimiento);
                  pacienteLogueado.setSexo(sexo);
                  pacienteLogueado.setNumeroDeContacto(Integer.parseInt(numeroDeContacto));
                  pacienteLogueado.setCorreoElectronico(correoElectronico);
                  pacienteLogueado.setContrasena(contrasena);
                  pacienteLogueado.setNombreDeUsuario(nombreDeUsuario);
                  pacienteLogueado.setCarnetDeIdentidad(carnetDeIdentidad);
                  pacienteLogueado.setToken(token);
                  ((PacienteLogueado) context.getApplicationContext()).setPacienteLogueadoInfo(pacienteLogueado);

                } catch (JSONException e) {
                  e.printStackTrace();
                  Toast.makeText(getApplicationContext(), e.toString(), Toast.LENGTH_SHORT).show();
                }
                startActivity(intent);

              }

              @Override
              public void onErrorResponse(VolleyError error, Context context) {
                Toast.makeText(context, "Nombre de usuario o contraseña incorrectos", Toast.LENGTH_SHORT).show();
              }
            });
          }
        });

    }

}
