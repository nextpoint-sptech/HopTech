/**
* Colocando a porta de entrada e qual sensor vamos usar
*/
int ldr_pin = A0, leitura_ldr = 0;
/*
float minLumens = 500;
float maxLumens = 800;
float minBits = 5;
float maxBits = 1011;*/

void setup() {
  Serial.begin(9600);
}

void loop() {
  leitura_ldr = analogRead(ldr_pin);
  float varCalculoLumen = (1670 + leitura_ldr) / 3.35;

  float leitura1 = varCalculoLumen * 1;
  float leitura2 = varCalculoLumen * 0.9;
  float leitura3 = varCalculoLumen * 0.6;
  float leitura4 = varCalculoLumen * 0.3;
  float leitura5 = varCalculoLumen * 1.2;

  Serial.print(leitura1);
  Serial.print(";");
  Serial.print(leitura2);
  Serial.print(";");
  Serial.print(leitura3);
  Serial.print(";");
  Serial.print(leitura4);
  Serial.print(";");
  Serial.print(leitura5);
  Serial.println(";");
  
  delay(2000);
}
