
class FizzBuzzer {
	// declaring constants
	private static final int start = 1, end = 100, fizzNum = 3, buzzNum = 5;

	public static void main(String[] args) {
		// calculating product of fizzNum and buzzNum for simpler and faster comparison inside the loop
		int fizzBuzzMultiple = fizzNum * buzzNum;
		for (int i = start; i < end; i++) {
			String num = "";
			if (i % fizzBuzzMultiple == 0) num = "FizzBuzz";
			else if (i % fizzNum == 0) num = "Fizz";
			else if (i % buzzNum == 0) num = "Buzz";
			else num += i;
			System.out.println(num);
		}
	}
}
