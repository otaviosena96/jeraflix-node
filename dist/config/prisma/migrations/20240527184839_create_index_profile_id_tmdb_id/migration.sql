-- CreateIndex
CREATE INDEX `idx_tmdbId_profile_id` ON `profile_movie_favorite`(`tmdbId`, `profile_id`);
