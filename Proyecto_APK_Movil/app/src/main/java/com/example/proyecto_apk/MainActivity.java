package com.example.proyecto_apk;

import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.example.proyecto_apk.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    Button button3,button5;
    boolean isOn= false;
    TextView textView3;
    Thread cronos;
    int mili=0, segu=0, minutos=0;
    Handler h=new Handler();


    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        BottomNavigationView navView = findViewById(R.id.nav_view);
        // Passing each menu ID as a set of Ids because each
        // menu should be considered as top level destinations.
        AppBarConfiguration appBarConfiguration = new AppBarConfiguration.Builder(
                R.id.navigation_home, R.id.navigation_dashboard, R.id.navigation_notifications)
                .build();
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_activity_main);

        NavigationUI.setupWithNavController(binding.navView, navController);

        setContentView(R.layout.fragment_control_de_estudio);
        button3=(Button)findViewById(R.id.button3);
        button5=(Button)findViewById(R.id.button5);
        textView3=(TextView)findViewById(R.id.textView3);
        button3.setOnClickListener(this);
        button5.setOnClickListener(this);
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
                        h.post(new Runnable() {
                            @Override
                            public void run() {
                                String m="",s="",mi="";
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
                                textView3.setText(mi+":"+s+":"+m);
                            }
                        });
                    }
                }
            }
        });
        cronos.start();
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.button3:
                isOn=true;
                break;
            case R.id.button5:
                isOn=false;
                break;
        }

    }
}