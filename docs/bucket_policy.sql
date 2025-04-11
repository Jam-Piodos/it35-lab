UPDATE storage.buckets SET public = TRUE WHERE id = 'user-avatars';

CREATE POLICY "Allow authenticated uploads"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'user-avatars'
);

CREATE POLICY "Allow public reads"
ON storage.objects
FOR SELECT
USING (
    bucket_id = 'user-avatars'
);

SELECT * FROM storage.objects WHERE bucket_id = 'user-avatars';