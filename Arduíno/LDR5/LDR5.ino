/**
* Colocando a porta de entrada e qual sensor vamos usar
*/
int ldr_pin = A0, leitura_ldr = 0;

/**
* Contador:
*/
int contador = 1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  leitura_ldr = analogRead(ldr_pin);
  
  Serial.print(contador);
  Serial.print('.');
  
  Serial.print(leitura_ldr);
  Serial.println(";");
  
  delay(2000);
  
  contador++;
}


