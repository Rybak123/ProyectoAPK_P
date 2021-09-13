package com.example.proyecto_apk.ui.home.ControlDeEstudio;

import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.ConeccionConElServidor.MandarPeticionOperacionsPaciente;
import com.example.proyecto_apk.ConeccionConElServidor.OperacionesPaciente;
import com.example.proyecto_apk.Interfaces.I_ActualizarControlDeActividad;
import com.example.proyecto_apk.Interfaces.I_ObtenerControlDeActividadesPaciente;
import com.example.proyecto_apk.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class ControlDeEstudio extends Fragment {


    boolean isOn= false;
    TextView tv_cronometro;
    Thread cronos;
    int mili=0, segu=0, minutos=0,horas=0;
    Handler h=new Handler();

    private Button btn_irCalendario;
    private Button btn_añadirMateria;
    private Button btn_eliminarMateria;
    private Button btn_iniciarCronometro;
    private Button btn_pararCronometro;
    private Spinner spinerMaterias;
    private EditText et_nombreNuevaMateria;
    ArrayList<MateriaPojo> materiasTiempo;
    ArrayAdapter<MateriaPojo> adapter;
    public static ControlDeEstudio newInstance(String param1, String param2) {
        ControlDeEstudio fragment = new ControlDeEstudio();
        return fragment;
    }
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View root=inflater.inflate(R.layout.fragment_control_de_estudio, container, false);
        materiasTiempo = new ArrayList<>();
        btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario);
        btn_añadirMateria=root.findViewById(R.id.id_controlDeEstudioF_btn_añadirMateria);
        btn_eliminarMateria=root.findViewById(R.id.id_controlDeEstudioF_btn_eliminarMateria);
        btn_iniciarCronometro=root.findViewById(R.id.id_controlDeSueno_btn10horas);
        btn_pararCronometro=root.findViewById(R.id.id_controlDeSueno_btn9horas);
        tv_cronometro=root.findViewById(R.id.id_controlDeEstudioF_tv_Cronometro);
        spinerMaterias=root.findViewById(R.id.spinnerMaterias);
        et_nombreNuevaMateria=root.findViewById(R.id.id_controlDeEstudioF_pt_nuevaMATERIAnOMBRE);
        setData();
        btn_irCalendario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentManager manager = getFragmentManager();
                FragmentTransaction transaction = manager.beginTransaction();
                transaction.replace(R.id.id_AgendaVirtualFragment, new CalendarioControlDeEstudio());
                transaction.commit();
            }
        });
        btn_añadirMateria.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            materiasTiempo.add(new MateriaPojo(materiasTiempo.size(),et_nombreNuevaMateria.getText().toString(),"00:00:00"));
              adapter.notifyDataSetChanged();
          }
        });
        btn_eliminarMateria.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            materiasTiempo.remove(spinerMaterias.getSelectedItem());
              adapter.notifyDataSetChanged();
          }
        });
        //IniciarCornometro
        btn_iniciarCronometro.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            isOn=true;
          }
        });
        //PararCronometro
        btn_pararCronometro.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            isOn=false;
            PararCronometro();
          }
        });
        spinerMaterias.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
          @Override
          public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
            String tiempoString=((MateriaPojo)adapterView.getItemAtPosition(i)).getCantidadTiempo();
            if(!tiempoString.equals("")){
              recordarTiempoDeMateria(tiempoString,i);
            }
            else {
              reinciarCronometro();
            }
          }

          @Override
          public void onNothingSelected(AdapterView<?> adapterView) {

          }
        });


      cronos=new Thread(new Runnable() {
        @Override
        public void run() {
          while(true){
            if (isOn){
              try {
                Thread.sleep(1);

              }catch (InterruptedException e){
                e.printStackTrace();
              }
              mili++;
              if (mili==999){
                segu++;
                mili=0;
              }
              if (segu==59){
                minutos++;
                segu=0;
              }
              if (minutos==59){
                horas++;
                minutos=0;
              }
              h.post(new Runnable() {
                @Override
                public void run() {
                  String m="",s="",mi="",h="";
                  if (mili<10){
                    m="00"+mili;
                  }else if (mili<100){
                    m="0"+mili;
                  }else{
                    m=""+mili;
                  }
                  if (segu<10){
                    s="0"+segu;
                  }else{
                    s=""+segu;
                  }
                  if (minutos<10){
                    mi="0"+minutos;
                  }else{
                    mi=""+minutos;
                  }
                  if (horas<10){
                    h="0"+horas;
                  }else{
                    h=""+horas;
                  }
                  tv_cronometro.setText(h+":"+mi+":"+s);
                }
              });
            }
          }
        }
      });
      cronos.start();
      return root;
    }

  private void reinciarCronometro() {
      this.segu=0;
      this.minutos=0;
      this.horas=0;
      tv_cronometro.setText("00:00:00");
  }

  private void recordarTiempoDeMateria(String TiempoMateriaseleccionada,int position) {
    String[] tiempoArray=TiempoMateriaseleccionada.split(":");
    this.horas=Integer.parseInt(tiempoArray[0]);
    this.minutos=Integer.parseInt(tiempoArray[1]);
    this.segu=Integer.parseInt(tiempoArray[2]);
    String horasString="0"+String.valueOf(this.horas);
    String minutosString="0"+String.valueOf(this.minutos);
    String seguString="0"+String.valueOf(this.segu);
    horasString=horasString.substring(horasString.length()-2);
    minutosString=minutosString.substring(minutosString.length()-2);
    seguString=seguString.substring(seguString.length()-2);
    String tiempoTranscurrido=horasString+":"+minutosString+":"+seguString;
    materiasTiempo.get(position).setCantidadTiempo(tiempoTranscurrido);
    adapter.notifyDataSetChanged();
    tv_cronometro.setText(tiempoTranscurrido);
  }

  private void PararCronometro() {
    MateriaPojo materiaSeleccionada=(MateriaPojo) spinerMaterias.getSelectedItem();

    for(int i=0;i<materiasTiempo.size();i++){
      if(materiasTiempo.get(i).getNombre().equals(materiaSeleccionada.getNombre())){
        String horasString="0"+String.valueOf(this.horas);
        String minutosString="0"+String.valueOf(this.minutos);
        String seguString="0"+String.valueOf(this.segu);
        horasString=horasString.substring(horasString.length()-2);
        minutosString=minutosString.substring(minutosString.length()-2);
        seguString=seguString.substring(seguString.length()-2);
        String tiempoTranscurrido=horasString+":"+minutosString+":"+seguString;
        materiasTiempo.get(i).setCantidadTiempo(tiempoTranscurrido);
      }
    }
    //TODO Hacer guardar los datos
      MandarPeticionOperacionsPaciente peticion=new MandarPeticionOperacionsPaciente(getContext());
      JSONArray arrayMaterias=new JSONArray();
      for(int i=0;i<materiasTiempo.size();i++){
        MateriaPojo materiaPojo=materiasTiempo.get(i);
        JSONObject object=new JSONObject();
        try {
          object.put("cantidadDeTiempo",materiaPojo.getCantidadTiempo());
          object.put("materia",materiaPojo.getNombre());
        } catch (JSONException e) {
          e.printStackTrace();
        }
        arrayMaterias.put(object);
      }
      peticion.actualizaControlDeEstudio(arrayMaterias, new I_ActualizarControlDeActividad() {
        @Override
        public void onSuccess(Boolean respuesta, Context context) {

        }

        @Override
        public void onErrorResponse(VolleyError error, Context context) {

        }
      });

  }

  private void setData() {
    adapter = new ArrayAdapter<MateriaPojo>(getContext(), android.R.layout.simple_spinner_item, materiasTiempo);
    spinerMaterias.setAdapter(adapter);
    OperacionesPaciente operaciones=new OperacionesPaciente(getContext());
    operaciones.obtenerControlDeEstudio(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {
        añadirMateriasGuardadasEnBaseDeDatos(listaDeEventos);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {

      }
    });
  }
  public void añadirMateriasGuardadasEnBaseDeDatos(JSONArray diasDeEstudio){
    Calendar MyDate = Calendar.getInstance();
    int month1=((MyDate.get(Calendar.MONTH)+1));
    int day1=(MyDate.get(Calendar.DAY_OF_MONTH));
    String month=String.valueOf(month1);
    String day=String.valueOf(day1);
    month="0"+month;
    day="0"+day;
    String fechaActualString = MyDate.get(Calendar.YEAR)+ "-"
      + month.substring(month.length()-2) + "-"
      + day.substring(day.length()-2);

    for(int i=0;i<diasDeEstudio.length();i++){
      try {
        JSONObject diaDeEstudio1 = diasDeEstudio.getJSONObject(i);
        String fechaJson=diaDeEstudio1.getString("fecha");
        JSONArray materiasEstudiadas=diaDeEstudio1.getJSONArray("materiasEstudiadas");
        Toast.makeText(getContext(), fechaJson+" "+fechaActualString, Toast.LENGTH_SHORT).show();
        if(fechaJson.equals(fechaActualString)){
          Toast.makeText(getContext(), fechaJson+" "+fechaActualString, Toast.LENGTH_SHORT).show();
          for(int j=0;j<materiasEstudiadas.length();j++){
            JSONObject materiaDeEstudio=materiasEstudiadas.getJSONObject(j);

            MateriaPojo materia=new MateriaPojo(materiasTiempo.size(),materiaDeEstudio.getString("materia"),materiaDeEstudio.getString("cantidadDeTiempo"));
            materiasTiempo.add(materia);
          }
          adapter.notifyDataSetChanged();
        }
      } catch (JSONException e) {
        e.printStackTrace();
      }
    }
  }

}
