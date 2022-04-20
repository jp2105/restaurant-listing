export const avgRating = (reviews) => {
    let totalRating = 0;
    reviews?.forEach(review => {
        totalRating += review?.rating;
    })
    return Math.round((totalRating / reviews.length) * 100) / 100
}

