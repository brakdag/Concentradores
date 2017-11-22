# Concentradores
Cálculo de extracción Solido Líquido. (Lixiviación)
![concentrador](./img/concentrador_simple.svg)
#### 1. Cálculo de $X_M$
>$X_{SM} = \frac{(L_0 X_{S0} + V_2 Y_{S2})}{ (L_0 + V_2)}$

>$X_{AM} = \frac{(L_0 X_{A0} + V_2 Y_{A2})}{(L_0+V_2)}$

>$X_M=[X_{SM},X_{AM}]$

#### 2. Cálculo de $X_1$

>$\frac{X_{SM}}{X_{AM}} X_{A1}=X_S-X_{A1}$

>$X_S -X_{A1} -X_{SM}/X_{AM}X_{A1}$

>$-X_S = -X_{A1}(1+\frac{X_{SM}}{X_{AM}})$

>$X_{A1} = \frac{X_S}{(1+X_{SM}/X_{AM})}$ 

>$X_{S1} = 1-X_B - X_{A1}$ 

>$X_1 = [X_{A1},X_{S1}]$

#### 3. Cálculo de $Y_1$

>$\frac{X_{SM}}{X_{AM}} Y_{A1}=Y_S- \frac{Y_{S2}}{X_{A0}}Y_{A1}$

>$(\frac{Y_{S2}}{X_{A0}}+\frac{X_{SM}}{X_{AM}}) Y_{A1}=Y_S$

>$Y_{A1}=\frac{Y_S}{(\frac{Y_{S2}}{X_{A0}}+\frac{X_{SM}}{X_{AM}})}$

>$Y_{S1}=1-Y_{A1}$

>$Y_1=[Y_{A1},Y_{S1}]$

#### 4. Cálculo $L_1$

>$L_1+V_1=L_0+V_2=M$

>$L_1=L_0 (X_{B0}+ X_{A1}+X_{S1})$

#### 5. Cálculo $V_1$

>$V_1 =V_2 Y_{S2}+L_0 (1-X_{S1}-X_{B0})$

#### 6. Cálculo % extracción.

>$E = \frac{V_1 Y_{A1}}{L_0 X_{A0}} 100=$