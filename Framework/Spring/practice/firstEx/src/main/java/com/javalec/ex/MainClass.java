package com.javalec.ex;

public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Calculation cal = new Calculation();
		cal.setFirstNum(10);
		cal.setSecondNum(20);
		
		cal.add();
		cal.sub();
		cal.mult();
		cal.div();
	}

}
