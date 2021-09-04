package com.example.proyecto_apk.ui.home.ControlDeEstudio;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.example.proyecto_apk.R;

import java.util.zip.Inflater;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ControlDeEstudio#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ControlDeEstudio extends Fragment {


    private Button btn_irCalendario;

    public static ControlDeEstudio newInstance(String param1, String param2) {
        ControlDeEstudio fragment = new ControlDeEstudio();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View root=inflater.inflate(R.layout.fragment_control_de_estudio, container, false);
        btn_irCalendario=root.findViewById(R.id.id_controlDeEstudioF_btn_irCalendario);
        btn_irCalendario.setOnClickListener(new View.OnClickListener() {




            @Override
            public void onClick(View view) {
                FragmentManager manager = getFragmentManager();
                FragmentTransaction transaction = manager.beginTransaction();
                transaction.replace(R.id.id_AgendaVirtualFragment, new CalendarioControlDeEstudio());
                transaction.commit();
            }
        });
        return root;


    }
}