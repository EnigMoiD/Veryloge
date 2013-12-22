module Mux_2x32(
	output [31:0] Out,
	input [31:0] I0, I1,
	input S
);
	wire [31:0] A0o, A1o;
	wire Sno;

	not Sn (Sno, S);

	assign A0o = I0 & {32{Sno}};
	assign A1o = I1 & {32{S}};

	assign Out = A0o | A1o;
endmodule