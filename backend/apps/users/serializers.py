from rest_framework import serializers
from .models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["bio", "timezone", "avatar", "onboarding_completed"]


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "email_verified",
            "created_at",
            "profile",
        ]
        read_only_fields = [
            "id",
            "email_verified",
            "created_at",
        ]