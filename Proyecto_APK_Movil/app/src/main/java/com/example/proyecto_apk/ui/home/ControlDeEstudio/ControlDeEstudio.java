package com.example.proyecto_apk.ui.home.ControlDeEstudio;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.proyecto_apk.R;

import java.util.ArrayList;
import java.util.zip.Inflater;

public class ControlDeEstudio extends Fragment {


    private Button btn_irCalendario;
    private Button btn_añadirMateria;
    private Button btn_eliminarMateria;
    private Spinner spinerMaterias;
    private EditText et_nombreNuevaMateria;
    ArrayList<MateriaPojo> countryList;
    ArrayAdapter<MateriaPojo> adapter;
    public static ControlDeEstudio newInstance(String param1, String param2) {
        ControlDeEstudio fragment = new ControlDeEstudio();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View root=inflater.inflate(R.layout.fragment_control_de_estudio, container, false);
        btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario);
        btn_añadirMateria=root.findViewById(R.id.id_controlDeEstudioF_btn_añadirMateria);
        btn_eliminarMateria=root.findViewById(R.id.id_controlDeEstudioF_btn_eliminarMateria);
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
              countryList.add(new MateriaPojo(countryList.size(),et_nombreNuevaMateria.getText().toString(),"0"));
              adapter.notifyDataSetChanged();
          }
        });
        btn_eliminarMateria.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
              countryList.remove(spinerMaterias.getSelectedItem());
              adapter.notifyDataSetChanged();
          }
        });
        return root;



    }
  private void setData() {
     countryList = new ArrayList<>();
    MateriaPojo materiaPojo=new MateriaPojo(1, "Lenguaje","");
    countryList.add(materiaPojo);
    countryList.add(new MateriaPojo(2, "Matematicas",""));

    adapter = new ArrayAdapter<MateriaPojo>(getContext(), android.R.layout.simple_spinner_item, countryList);

    spinerMaterias.setAdapter(adapter);
    spinerMaterias.setSelection(adapter.getPosition(materiaPojo));//Optional to set the selected item.
  }
}
