export type ProfileType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  companyName: string;
};

export async function fetchProfile() {
  const data: ProfileType = await fetch('http://localhost:9000/profile').then(
    (res) => res.json(),
  );

  return data;
}
