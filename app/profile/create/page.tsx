import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const createProfileAction = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('fistName') as string;
};

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={createProfileAction}>
          <div className="mb-2">
            <Label htmlFor='firstName'>First Name</Label>
            <Input id='firstName' name="firstName" type='text'/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProfilePage;
