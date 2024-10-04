import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/mongoConnect";

export const POST = async (request) => {
  const { fname, lname, email, password } = await request.json();
  await dbConnect();
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashPassword,
  };
  try {
    const user = await userModel.create(newUser);
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
};
