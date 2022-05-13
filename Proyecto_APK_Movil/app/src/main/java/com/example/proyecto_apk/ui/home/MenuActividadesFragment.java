package com.example.proyecto_apk.ui.home;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.example.proyecto_apk.R;
import com.example.proyecto_apk.ui.home.ControlDeAguaConsumida.controlDeAguaConsumida;
import com.example.proyecto_apk.ui.home.ControlDeAnimo.controlDeAnimo;
import com.example.proyecto_apk.ui.home.ControlDeEnergia.calendarioControlDeEnergia;
import com.example.proyecto_apk.ui.home.ControlDeEnergia.controlDeEnergia;
import com.example.proyecto_apk.ui.home.ControlDeEstudio.CalendarioControlDeEstudio;
import com.example.proyecto_apk.ui.home.ControlDeEstudio.ControlDeEstudio;
import com.example.proyecto_apk.ui.home.ControlDeSueno.controlDeSueno;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link MenuActividadesFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class MenuActividadesFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private Button btn_controlDeEstudio;
    private Button btn_controlDeSueno;
    private Button btn_controlDeEnergia;
    private Button btn_controlDeAnimo;
    private Button btn_controlDeConsumoDeAgua;

    private View root;
    public MenuActividadesFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment MenuActividadesFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static MenuActividadesFragment newInstance(String param1, String param2) {
        MenuActividadesFragment fragment = new MenuActividadesFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        root = inflater.inflate(R.layout.fragment_menu_actividades, container, false);
        btn_controlDeEstudio=root.findViewById(R.id.id_menuActividades_btn_controlDeEstudio);
        btn_controlDeAnimo=root.findViewById(R.id.id_menuActividades_btn_controlDeAnimo);
        btn_controlDeSueno=root.findViewById(R.id.id_menuActividades_btn_controlDeSueno);
        btn_controlDeConsumoDeAgua=root.findViewById(R.id.id_menuActividades_btn_controlDeAguaConsumida);
        btn_controlDeEnergia=root.findViewById(R.id.id_menuActividades_btn_controlDeEnergia);

      btn_controlDeEstudio.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            FragmentManager manager = getFragmentManager();
            FragmentTransaction transaction = manager.beginTransaction();
            transaction.replace(R.id.id_AgendaVirtualFragment, new ControlDeEstudio());
            transaction.commit();
          }
        });
      btn_controlDeAnimo.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new controlDeAnimo());
          transaction.commit();
        }
      });
      btn_controlDeSueno.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new controlDeSueno());
          transaction.commit();
        }
      });
      btn_controlDeConsumoDeAgua.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new controlDeAguaConsumida());
          transaction.commit();
        }
      });
      btn_controlDeEnergia.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
          FragmentManager manager = getFragmentManager();
          FragmentTransaction transaction = manager.beginTransaction();
          transaction.replace(R.id.id_AgendaVirtualFragment, new controlDeEnergia());
          transaction.commit();
        }
      });


        return root;
    }
}
