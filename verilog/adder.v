module Adder (
	output Sum, Xor, Cout,
	input A, B, Cin
);
	assign {Cout, Sum} = A + B + Cin;
	assign Xor = A ^ B;
endmodule