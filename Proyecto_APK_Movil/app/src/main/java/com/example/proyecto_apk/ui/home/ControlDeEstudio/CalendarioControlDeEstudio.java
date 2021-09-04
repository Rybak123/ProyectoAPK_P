package com.example.proyecto_apk.ui.home.ControlDeEstudio;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.example.proyecto_apk.R;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link CalendarioControlDeEstudio#newInstance} factory method to
 * create an instance of this fragment.
 */
public class CalendarioControlDeEstudio extends Fragment {

    private Button btn_volver;

    public CalendarioControlDeEstudio() {

    }

    // TODO: Rename and change types and number of parameters
    public static CalendarioControlDeEstudio newInstance(String param1, String param2) {
        CalendarioControlDeEstudio fragment = new CalendarioControlDeEstudio();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root=inflater.inflate(R.layout.fragment_calendario_control_de_estudio, container, false);
        btn_volver=root.findViewById(R.id.id_CalendarioControlDeEstudioF_btn_volver);
        btn_volver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentManager manager = getFragmentManager();
                FragmentTransaction transaction = manager.beginTransaction();
                transaction.replace(R.id.id_AgendaVirtualFragment, new ControlDeEstudio());
                transaction.commit();
            }
        });
        return root;
    }
}